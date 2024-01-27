// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract SocialFia is AccessControl {
    bytes32 public constant MEMBER_ROLE = keccak256("MEMBER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE"); 

    uint256 postId;
    uint256 memberId;
    uint256 totalBalance;

    struct NewMember {
        string name;
        string bio;
        address payable owner;
    }

    struct Post {
        string title;
        string description;
        uint256 tokenAmount;
        address payable owner;
        string[] comments;
        uint256 likes;
        uint256 unlikes;
    }

    event PostCreation (string name, string description, address payable owner, uint256 likes, uint256 unlikes);

    mapping(uint256 => Post) public _post;
    mapping(bytes32 => bool) public _ordersSignatures; // Changed key type to bytes32
    mapping (uint256 => NewMember) public _newMember;

    mapping(uint256 => mapping(address => bool)) public hasLiked;
    mapping(uint256 => mapping(address => bool)) public hasDisliked;



    constructor() {
        _setRoleAdmin(MEMBER_ROLE, DEFAULT_ADMIN_ROLE); 
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender); 
    }

    // modifiers 

    modifier onlyAdmin() {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "You are not an admin");
        _;
    }
    modifier onlyMember(uint256 memberID) {
        require(_newMember[memberId].owner == msg.sender);
        _;
    }

    modifier onlyRegisterMember() {
        require(
            hasRole(MEMBER_ROLE, msg.sender),
            "Only manager can call this function"
        );
        _;
    }

    function newMember(string memory _name, string memory _bio) public  {
        _newMember[memberId] = NewMember(_name, _bio, payable (msg.sender));
    }

    function editBio(uint256 index, string memory _bio) public onlyMember(index) {
        
        NewMember storage newMemberInfo = _newMember[index];
        newMemberInfo.bio = _bio;
    }

    function deleteMember( uint256 index) public onlyMember(index) onlyAdmin {
        delete _newMember[index];
    }

    function newPost(string memory _title, string memory _description) public   {
        Post storage newUserPost = _post[postId];
        newUserPost.title = _title;
        newUserPost.description = _description;
        newUserPost.tokenAmount = 0;
        newUserPost.likes = 0;
        newUserPost.unlikes = 0;

        postId++;
    }

    function likePost(uint256 _postId) external onlyRegisterMember {
        require(!hasLiked[_postId][msg.sender], "You have already liked this post");
        if(hasDisliked[_postId][msg.sender]) {
            _post[_postId].unlikes--;
            hasDisliked[_postId][msg.sender] = false;
        }

        _post[_postId].likes++;
        hasLiked[_postId][msg.sender] = true;
    }

    function unLikePost(uint256 _postId) external  {
        require(!hasDisliked[_postId][msg.sender], "You have already disliked this post");
        if(hasLiked[_postId][msg.sender]) {
            _post[_postId].likes--;
            hasLiked[_postId][msg.sender] = false;
        }
        _post[_postId].unlikes++;
        hasDisliked[_postId][msg.sender] = true;
    }

    function comentPost(uint256 _postId, string memory _comment) external   {
        _post[_postId].comments.push(_comment);
    }

    function getComments(uint256 _postId) public view returns (string memory) {
    Post storage post = _post[_postId];
    uint256 numComments = post.comments.length;
    string memory allComments = "";
    for (uint256 i = 0; i < numComments; i++) {
        allComments = string(abi.encodePacked(allComments, post.comments[i], "\n"));
    }
    return allComments;
}

// rewards

function deposit(uint256 _postId) public payable {
    Post storage post = _post[_postId];
    post.tokenAmount = msg.value;
    totalBalance += msg.value; // Add deposited ETH to user's balance
}

function rewards(uint256 _postId) external  {
    Post storage post = _post[_postId];
    uint256 fee = 0.00044 ether;
    post.owner.transfer(fee);

}


}
