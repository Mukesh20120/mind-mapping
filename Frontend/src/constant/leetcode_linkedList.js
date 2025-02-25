export const notesData = {
  "note_1": {
    "body": "﻿\n\n<title>\nNote - Leetcode LinkedList\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nLeetcode LinkedList\n</h2>\n<hr>\n<p>\n19\n<br>\n21\n<br>\n141-e\n<br>\n142-m\n<br>\n160-e\n<br>\n202-e ** 2507\n<br>\n203\n<br>\n206\n<br>\n234\n<br>\n237\n<br>\n287\n<br>\n876\n<br>\n1290\n<br>\n1721\n<br>\n2095\n<br>\n2130\n<br>\n2487\n<br>\n3217\n</p>\n\n\n"
  },
  "note_10": {
    "body": "﻿\n\n<title>\nNote - O(n) Delete node\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) Delete node\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode* removeElements(ListNode* head, int val) {\n<br>\n        ListNode* dummy = new ListNode(0, head);\n<br>\n        ListNode *prev = dummy, *cur = head;\n<br>\n        while (cur) {\n<br>\n            if (cur-&gt;val == val) {\n<br>\n                prev-&gt;next = cur-&gt;next;\n<br>\n                delete cur;\n<br>\n                cur = prev-&gt;next;\n<br>\n            } else {\n<br>\n                prev = cur;\n<br>\n                cur = cur-&gt;next;\n<br>\n            }\n<br>\n        }\n<br>\n        ListNode *newHead = dummy-&gt;next;\n<br>\n        delete dummy;\n<br>\n        return newHead;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_11": {
    "body": "﻿\n\n<title>\nNote - 237.Delete Node in a Linked List\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n237.Delete Node in a Linked List\n</h2>\n<hr>\n<p>\nThere is a singly-linked list head and we want to delete a node node in it.\n<br>\n\n<br>\nYou are given the node to be deleted node. You will not be given access to the first node of head.\n<br>\n\n<br>\nAll the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.\n<br>\n\n<br>\nDelete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:\n<br>\n\n<br>\nThe value of the given node should not exist in the linked list.\n<br>\nThe number of nodes in the linked list should decrease by one.\n<br>\nAll the values before node should be in the same order.\n<br>\nAll the values after node should be in the same order.\n<br>\nCustom testing:\n<br>\n\n<br>\nFor the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.\n<br>\nWe will build the linked list and pass the node to your function.\n<br>\nThe output will be the entire list after calling your function.\n</p>\n\n\n"
  },
  "note_12": {
    "body": "﻿\n\n<title>\nNote - O(n) delete next node\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) delete next node\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    void deleteNode(ListNode* node) {\n<br>\n        ListNode *del = node-&gt;next;\n<br>\n        node-&gt;val = del-&gt;val;\n<br>\n        node-&gt;next=del-&gt;next;\n<br>\n        delete del;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_13": {
    "body": "﻿\n\n<title>\nNote - 3217. Delete Nodes From Linked List Present in Array\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n3217. Delete Nodes From Linked List Present in Array\n</h2>\n<hr>\n<p>\nou are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [1,2,3], head = [1,2,3,4,5]\n<br>\n\n<br>\nOutput: [4,5]\n<br>\n\n<br>\nExplanation:\n<br>\n\n<br>\n\n<br>\n\n<br>\nRemove the nodes with values 1, 2, and 3.\n<br>\n\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [1], head = [1,2,1,2,1,2]\n<br>\n\n<br>\nOutput: [2,2,2]\n<br>\n\n<br>\nExplanation:\n<br>\n\n<br>\n\n<br>\n\n<br>\nRemove the nodes with value 1.\n<br>\n\n<br>\nExample 3:\n<br>\n\n<br>\nInput: nums = [5], head = [1,2,3,4]\n<br>\n\n<br>\nOutput: [1,2,3,4]\n<br>\n\n<br>\nExplanation:\n<br>\n\n<br>\n\n<br>\n\n<br>\nNo node has value 5.\n</p>\n\n\n"
  },
  "note_14": {
    "body": "﻿\n\n<title>\nNote - O(n) UnorderSet\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) UnorderSet\n</h2>\n<hr>\n<p>\n/**\n<br>\n * Definition for singly-linked list.\n<br>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode* modifiedList(vector&lt;int&gt;&amp; nums, ListNode* head) {\n<br>\n        unordered_set&lt;int&gt;st(nums.begin(),nums.end());\n<br>\n        ListNode *dummy = new ListNode(0, head);\n<br>\n        ListNode *prev=dummy,*cur=head;\n<br>\n        while(cur){\n<br>\n            if(st.count(cur-&gt;val)){\n<br>\n                prev-&gt;next=cur-&gt;next;\n<br>\n                cur=prev-&gt;next;\n<br>\n            }\n<br>\n            else{\n<br>\n                prev=cur;\n<br>\n                cur=cur-&gt;next;\n<br>\n            }\n<br>\n        }\n<br>\n    return dummy-&gt;next;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_15": {
    "body": "﻿\n\n<title>\nNote - 2487. Remove Nodes From Linked List\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2487. Remove Nodes From Linked List\n</h2>\n<hr>\n<p>\nYou are given the head of a linked list.\n<br>\n\n<br>\nRemove every node which has a node with a greater value anywhere to the right side of it.\n<br>\n\n<br>\nReturn the head of the modified linked list.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [5,2,13,3,8]\n<br>\nOutput: [13,8]\n<br>\nExplanation: The nodes that should be removed are 5, 2 and 3.\n<br>\n- Node 13 is to the right of node 5.\n<br>\n- Node 13 is to the right of node 2.\n<br>\n- Node 8 is to the right of node 3.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: head = [1,1,1,1]\n<br>\nOutput: [1,1,1,1]\n<br>\nExplanation: Every node has value 1, so no nodes are removed.\n</p>\n\n\n"
  },
  "note_16": {
    "body": "﻿\n\n<title>\nNote - reverse + delete\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nreverse + delete\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode *reverse(ListNode *head){\n<br>\n        ListNode *p,*q,*r;\n<br>\n        p=head;\n<br>\n        q=nullptr;\n<br>\n        while(p){\n<br>\n            r=q;\n<br>\n            q=p;\n<br>\n            p=p-&gt;next;\n<br>\n            q-&gt;next=r;\n<br>\n        }\n<br>\n    return q;\n<br>\n    }\n<br>\n    ListNode* removeNodes(ListNode* head) {\n<br>\n        int largest=0;\n<br>\n        ListNode *rev = reverse(head);\n<br>\n        ListNode *dummy = new ListNode(0, rev);\n<br>\n        ListNode *prev=dummy,*cur=rev;\n<br>\n        while(cur){\n<br>\n            if(largest&lt;=cur-&gt;val){\n<br>\n                largest=cur-&gt;val;\n<br>\n                prev=cur;\n<br>\n                cur=cur-&gt;next;\n<br>\n            }\n<br>\n            else{\n<br>\n              \n<br>\n                prev-&gt;next=cur-&gt;next;\n<br>\n                cur=cur-&gt;next;\n<br>\n            }\n<br>\n        }\n<br>\n    return reverse(dummy-&gt;next);\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_17": {
    "body": "﻿\n\n<title>\nNote - 2130. Maximum Twin Sum of a Linked List\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2130. Maximum Twin Sum of a Linked List\n</h2>\n<hr>\n<p>\nIn a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 &lt;= i &lt;= (n / 2) - 1.\n<br>\n\n<br>\nFor example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.\n<br>\nThe twin sum is defined as the sum of a node and its twin.\n<br>\n\n<br>\nGiven the head of a linked list with even length, return the maximum twin sum of the linked list.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [5,4,2,1]\n<br>\nOutput: 6\n<br>\nExplanation:\n<br>\nNodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.\n<br>\nThere are no other nodes with twins in the linked list.\n<br>\nThus, the maximum twin sum of the linked list is 6. \n<br>\nExample 2:\n<br>\n\n<br>\n\n<br>\nInput: head = [4,2,2,3]\n<br>\nOutput: 7\n<br>\nExplanation:\n<br>\nThe nodes with twins present in this linked list are:\n<br>\n- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.\n<br>\n- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.\n<br>\nThus, the maximum twin sum of the linked list is max(7, 4) = 7.\n</p>\n\n\n"
  },
  "note_18": {
    "body": "﻿\n\n<title>\nNote - reverse + slow/fast\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nreverse + slow/fast\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode *reverse(ListNode *head){\n<br>\n        ListNode *p,*q,*r;\n<br>\n        p=head;\n<br>\n        q=nullptr;\n<br>\n        while(p){\n<br>\n            r=q;\n<br>\n            q=p;\n<br>\n            p=p-&gt;next;\n<br>\n            q-&gt;next=r;\n<br>\n        }\n<br>\n    return q;\n<br>\n    }\n<br>\n    int pairSum(ListNode* head) {\n<br>\n        ListNode *slow=head,*fast=head;\n<br>\n        ListNode *prev;\n<br>\n        while(fast &amp;&amp; fast-&gt;next){\n<br>\n            prev=slow;\n<br>\n            slow=slow-&gt;next;\n<br>\n            fast=fast-&gt;next-&gt;next;\n<br>\n        }\n<br>\n        int ans=0;\n<br>\n        if(prev)\n<br>\n          prev-&gt;next=reverse(slow);\n<br>\n         slow=fast=head;\n<br>\n         while(fast &amp;&amp; fast-&gt;next){\n<br>\n            prev=slow;\n<br>\n            slow=slow-&gt;next;\n<br>\n            fast=fast-&gt;next-&gt;next;\n<br>\n         }\n<br>\n         fast=head;\n<br>\n         while(slow &amp;&amp; fast){\n<br>\n            int sum = slow-&gt;val + fast-&gt;val;\n<br>\n            if(sum&gt;ans)ans=sum;\n<br>\n            slow=slow-&gt;next;\n<br>\n            fast=fast-&gt;next;\n<br>\n         }\n<br>\n         prev-&gt;next=reverse(prev-&gt;next);\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_19": {
    "body": "﻿\n\n<title>\nNote - 141. Linked List Cycle\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n141. Linked List Cycle\n</h2>\n<hr>\n<p>\nGiven head, the head of a linked list, determine if the linked list has a cycle in it.\n<br>\n\n<br>\nThere is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.\n<br>\n\n<br>\nReturn true if there is a cycle in the linked list. Otherwise, return false.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [3,2,0,-4], pos = 1\n<br>\nOutput: true\n<br>\nExplanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).\n<br>\nExample 2:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2], pos = 0\n<br>\nOutput: true\n<br>\nExplanation: There is a cycle in the linked list, where the tail connects to the 0th node.\n<br>\nExample 3:\n<br>\n\n<br>\n\n<br>\nInput: head = [1], pos = -1\n<br>\nOutput: false\n<br>\nExplanation: There is no cycle in the linked list.\n</p>\n\n\n"
  },
  "note_2": {
    "body": "﻿\n\n<title>\nNote - 1290. Convert Binary Number in a Linked List to Integer\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1290. Convert Binary Number in a Linked List to Integer\n</h2>\n<hr>\n<p>\nGiven head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.\n<br>\n\n<br>\nReturn the decimal value of the number in the linked list.\n<br>\n\n<br>\nThe most significant bit is at the head of the linked list.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,0,1]\n<br>\nOutput: 5\n<br>\nExplanation: (101) in base 2 = (5) in base 10\n<br>\nExample 2:\n<br>\n\n<br>\nInput: head = [0]\n<br>\nOutput: 0\n</p>\n\n\n"
  },
  "note_20": {
    "body": "﻿\n\n<title>\nNote - Slow &amp; fast\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nSlow &amp; fast\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool hasCycle(ListNode *head) {\n<br>\n        ListNode *slow=head,*fast=head;\n<br>\n        while(fast &amp;&amp; fast-&gt;next){\n<br>\n            slow=slow-&gt;next;\n<br>\n            fast=fast-&gt;next-&gt;next;\n<br>\n            if(slow==fast)return true;\n<br>\n        }\n<br>\n    return false;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_21": {
    "body": "﻿\n\n<title>\nNote - 142. Linked List Cycle II\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n142. Linked List Cycle II\n</h2>\n<hr>\n<p>\nGiven the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.\n<br>\n\n<br>\nThere is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.\n<br>\n\n<br>\nDo not modify the linked list.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [3,2,0,-4], pos = 1\n<br>\nOutput: tail connects to node index 1\n<br>\nExplanation: There is a cycle in the linked list, where tail connects to the second node.\n<br>\nExample 2:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2], pos = 0\n<br>\nOutput: tail connects to node index 0\n<br>\nExplanation: There is a cycle in the linked list, where tail connects to the first node.\n<br>\nExample 3:\n<br>\n\n<br>\n\n<br>\nInput: head = [1], pos = -1\n<br>\nOutput: no cycle\n<br>\nExplanation: There is no cycle in the linked list.\n</p>\n\n\n"
  },
  "note_22": {
    "body": "﻿\n\n<title>\nNote - slow &amp; fast\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nslow &amp; fast\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode *detectCycle(ListNode *head) {\n<br>\n        ListNode *slow=head,*fast=head;\n<br>\n        if(!head || !head-&gt;next)return nullptr;\n<br>\n        while(fast &amp;&amp; fast-&gt;next){\n<br>\n            slow=slow-&gt;next;\n<br>\n            fast=fast-&gt;next-&gt;next;\n<br>\n            if(slow==fast)break;\n<br>\n        }\n<br>\n        if(slow!=fast)return nullptr;\n<br>\n        fast=head;\n<br>\n        while(slow!=fast){\n<br>\n            slow=slow-&gt;next;\n<br>\n            fast=fast-&gt;next;\n<br>\n        }\n<br>\n    return fast;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_23": {
    "body": "﻿\n\n<title>\nNote - 202. Happy Number\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n202. Happy Number\n</h2>\n<hr>\n<p>\nWrite an algorithm to determine if a number n is happy.\n<br>\n\n<br>\nA happy number is a number defined by the following process:\n<br>\n\n<br>\nStarting with any positive integer, replace the number by the sum of the squares of its digits.\n<br>\nRepeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.\n<br>\nThose numbers for which this process ends in 1 are happy.\n<br>\nReturn true if n is a happy number, and false if not.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: n = 19\n<br>\nOutput: true\n<br>\nExplanation:\n<br>\n12 + 92 = 82\n<br>\n82 + 22 = 68\n<br>\n62 + 82 = 100\n<br>\n12 + 02 + 02 = 1\n<br>\nExample 2:\n<br>\n\n<br>\nInput: n = 2\n<br>\nOutput: false\n</p>\n\n\n"
  },
  "note_24": {
    "body": "﻿\n\n<title>\nNote - brute\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nbrute\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool isHappy(int n) {\n<br>\n          vector&lt;int&gt; square({0, 1, 4, 9, 16, 25, 36, 49, 64, 81});\n<br>\n        unordered_set&lt;int&gt; st;\n<br>\n        long long sum = n;\n<br>\n        \n<br>\n        while (sum != 1 &amp;&amp; !st.count(sum)) {\n<br>\n            st.insert(sum);\n<br>\n            long long cur = sum;\n<br>\n            long long nsum = 0;\n<br>\n            while (cur &gt; 0) {\n<br>\n                long long rem = cur % 10;\n<br>\n                cur /= 10;\n<br>\n                nsum += square[rem]; // Fixed indexing\n<br>\n            }\n<br>\n            sum = nsum;\n<br>\n        }\n<br>\n        \n<br>\n        return sum == 1;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_25": {
    "body": "﻿\n\n<title>\nNote - slow &amp; fast\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nslow &amp; fast\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int square(int n){\n<br>\n        int sum=0;\n<br>\n        while(n&gt;0){\n<br>\n          int rem = n%10;\n<br>\n          n/=10;\n<br>\n          sum+=rem*rem;\n<br>\n        }\n<br>\n    return sum;\n<br>\n    }\n<br>\n    bool isHappy(int n) {\n<br>\n        int slow=n,fast=n;\n<br>\n        do{\n<br>\n            slow=square(slow);\n<br>\n            fast=square(square(fast));\n<br>\n        }while(slow!=fast);\n<br>\n   return slow==1;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_26": {
    "body": "﻿\n\n<title>\nNote - 206. Reverse Linked List\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n206. Reverse Linked List\n</h2>\n<hr>\n<p>\nGiven the head of a singly linked list, reverse the list, and return the reversed list.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2,3,4,5]\n<br>\nOutput: [5,4,3,2,1]\n<br>\nExample 2:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2]\n<br>\nOutput: [2,1]\n<br>\nExample 3:\n<br>\n\n<br>\nInput: head = []\n<br>\nOutput: []\n</p>\n\n\n"
  },
  "note_27": {
    "body": "﻿\n\n<title>\nNote - O(n) imp\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) imp\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode* reverseList(ListNode* head) {\n<br>\n        if(!head || !head-&gt;next)return head;\n<br>\n        ListNode *q=nullptr,*r,*p=head;\n<br>\n        while(p){\n<br>\n            r=q;\n<br>\n            q=p;\n<br>\n            p=p-&gt;next;\n<br>\n            q-&gt;next=r;\n<br>\n        }\n<br>\n    return q;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_28": {
    "body": "﻿\n\n<title>\nNote - 160. Intersection of Two Linked Lists\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n160. Intersection of Two Linked Lists\n</h2>\n<hr>\n<p>\nGiven the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.\n<br>\n\n<br>\nFor example, the following two linked lists begin to intersect at node c1:\n<br>\n\n<br>\n\n<br>\nThe test cases are generated such that there are no cycles anywhere in the entire linked structure.\n<br>\n\n<br>\nNote that the linked lists must retain their original structure after the function returns.\n<br>\n\n<br>\nCustom Judge:\n<br>\n\n<br>\nThe inputs to the judge are given as follows (your program is not given these inputs):\n<br>\n\n<br>\nintersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.\n<br>\nlistA - The first linked list.\n<br>\nlistB - The second linked list.\n<br>\nskipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.\n<br>\nskipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.\n<br>\nThe judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3\n<br>\nOutput: Intersected at '8'\n<br>\nExplanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).\n<br>\nFrom the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.\n<br>\n- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.\n<br>\nExample 2:\n<br>\n\n<br>\n\n<br>\nInput: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1\n<br>\nOutput: Intersected at '2'\n<br>\nExplanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).\n<br>\nFrom the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.\n<br>\nExample 3:\n<br>\n\n<br>\n\n<br>\nInput: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2\n<br>\nOutput: No intersection\n<br>\nExplanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.\n<br>\nExplanation: The two lists do not intersect, so return null.\n</p>\n\n\n"
  },
  "note_29": {
    "body": "﻿\n\n<title>\nNote - O(n+m) optimal\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n+m) optimal\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n<br>\n        ListNode *a=headA,*b=headB;\n<br>\n        while(a!=b){\n<br>\n            a=a?a-&gt;next:headB;\n<br>\n            b=b?b-&gt;next:headA;\n<br>\n        }\n<br>\n    return a;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_3": {
    "body": "﻿\n\n<title>\nNote - O(n) Reverse list\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) Reverse list\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n   ListNode* reverse(ListNode* head){\n<br>\n    ListNode *p,*q,*r;\n<br>\n    p=head;\n<br>\n    q=nullptr;\n<br>\n    while(p){\n<br>\n        r=q;\n<br>\n        q=p;\n<br>\n        p=p-&gt;next;\n<br>\n        q-&gt;next=r;\n<br>\n    }\n<br>\n    return q;\n<br>\n   }\n<br>\n    int getDecimalValue(ListNode* head) {\n<br>\n        ListNode *rev = reverse(head);\n<br>\n        int i=0;\n<br>\n        int ans=0;\n<br>\n        while(rev){\n<br>\n           if(rev-&gt;val)\n<br>\n             ans=ans | (1&lt;&lt;i);\n<br>\n        i++;\n<br>\n        rev=rev-&gt;next;\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_30": {
    "body": "﻿\n\n<title>\nNote - 287. Find the Duplicate Number \n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n287. Find the Duplicate Number \n</h2>\n<hr>\n<p>\n287. Find the Duplicate Number\n<br>\nSolved\n<br>\nMedium\n<br>\nTopics\n<br>\nCompanies\n<br>\nGiven an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.\n<br>\n\n<br>\nThere is only one repeated number in nums, return this repeated number.\n<br>\n\n<br>\nYou must solve the problem without modifying the array nums and using only constant extra space.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [1,3,4,2,2]\n<br>\nOutput: 2\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [3,1,3,4,2]\n<br>\nOutput: 3\n<br>\nExample 3:\n<br>\n\n<br>\nInput: nums = [3,3,3,3,3]\n<br>\nOutput: 3\n</p>\n\n\n"
  },
  "note_31": {
    "body": "﻿\n\n<title>\nNote - slow &amp; fast\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nslow &amp; fast\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int findDuplicate(vector&lt;int&gt;&amp; nums) {\n<br>\n        int slow=nums[0],fast=nums[0];\n<br>\n        do{\n<br>\n            slow=nums[slow];\n<br>\n            fast=nums[nums[fast]];\n<br>\n        }while(slow!=fast);\n<br>\n        fast=nums[0];\n<br>\n        while(slow!=fast){\n<br>\n            fast=nums[fast];\n<br>\n            slow=nums[slow];\n<br>\n        }\n<br>\n    return slow;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_32": {
    "body": "﻿\n\n<title>\nNote - O(n) abs\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) abs\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int findDuplicate(vector&lt;int&gt;&amp; nums) {\n<br>\n        for(int &amp;i: nums){\n<br>\n            int id = abs(i)-1;\n<br>\n            if(nums[id]&lt;0){\n<br>\n                return abs(i);\n<br>\n            }\n<br>\n            nums[id]=-nums[id];\n<br>\n        }\n<br>\n    return -1;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_33": {
    "body": "﻿\n\n<title>\nNote - 234. Palindrome Linked List\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n234. Palindrome Linked List\n</h2>\n<hr>\n<p>\nGiven the head of a singly linked list, return true if it is a \n<br>\npalindrome\n<br>\n or false otherwise.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2,2,1]\n<br>\nOutput: true\n<br>\nExample 2:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2]\n<br>\nOutput: false\n<br>\n \n<br>\n\n<br>\nConstraints:\n<br>\n\n<br>\nThe number of nodes in the list is in the range [1, 105].\n<br>\n0 &lt;= Node.val &lt;= 9\n<br>\n \n<br>\n\n<br>\nFollow up: Could you do it in O(n) time and O(1) space?\n</p>\n\n\n"
  },
  "note_34": {
    "body": "﻿\n\n<title>\nNote - O(n) solution\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) solution\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode *reverse(ListNode *head){\n<br>\n        ListNode *p=head,*q,*r;\n<br>\n        q=r=nullptr;\n<br>\n        while(p){\n<br>\n           r=q;\n<br>\n           q=p;\n<br>\n           p=p-&gt;next;\n<br>\n           q-&gt;next=r;\n<br>\n        }\n<br>\n    return q;\n<br>\n    }\n<br>\n    bool isPalindrome(ListNode* head) {\n<br>\n        if(!head || !head-&gt;next)return true;\n<br>\n        //finding the middle of the linkedlist\n<br>\n        ListNode *slow=head,*fast=head;\n<br>\n        while(fast &amp;&amp; fast-&gt;next){\n<br>\n            slow=slow-&gt;next;\n<br>\n            fast=fast-&gt;next-&gt;next;\n<br>\n        }\n<br>\n        //reverse the half of the linked list \n<br>\n        ListNode *sec=reverse(slow);\n<br>\n        ListNode *cur = head;\n<br>\n        //check the palindrome if the value match\n<br>\n        while(cur &amp;&amp; sec){\n<br>\n            if(cur-&gt;val != sec-&gt;val)return false;\n<br>\n            cur=cur-&gt;next;\n<br>\n            sec=sec-&gt;next;\n<br>\n        }\n<br>\n    return true;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_35": {
    "body": "﻿\n\n<title>\nNote - 19. Remove Nth Node From End of List\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n19. Remove Nth Node From End of List\n</h2>\n<hr>\n<p>\nGiven the head of a linked list, remove the nth node from the end of the list and return its head.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2,3,4,5], n = 2\n<br>\nOutput: [1,2,3,5]\n<br>\nExample 2:\n<br>\n\n<br>\nInput: head = [1], n = 1\n<br>\nOutput: []\n<br>\nExample 3:\n<br>\n\n<br>\nInput: head = [1,2], n = 1\n<br>\nOutput: [1]\n</p>\n\n\n"
  },
  "note_36": {
    "body": "﻿\n\n<title>\nNote - O(n) solution\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) solution\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\n<br>\n        ListNode *dummy = new ListNode(0,head);\n<br>\n        ListNode *cur=head,*prev=dummy;\n<br>\n        while(cur){\n<br>\n            if(n&gt;0)n--;\n<br>\n            else prev=prev-&gt;next;\n<br>\n            cur=cur-&gt;next;\n<br>\n        }\n<br>\n        if(prev-&gt;next)\n<br>\n           prev-&gt;next=prev-&gt;next-&gt;next;\n<br>\n    return dummy-&gt;next;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_37": {
    "body": "﻿\n\n<title>\nNote - 1721. Swapping Nodes in a Linked List\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1721. Swapping Nodes in a Linked List\n</h2>\n<hr>\n<p>\nYou are given the head of a linked list, and an integer k.\n<br>\n\n<br>\nReturn the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2,3,4,5], k = 2\n<br>\nOutput: [1,4,3,2,5]\n<br>\nExample 2:\n<br>\n\n<br>\nInput: head = [7,9,6,6,7,8,3,0,9,5], k = 5\n<br>\nOutput: [7,9,6,6,8,7,3,0,9,5]\n</p>\n\n\n"
  },
  "note_38": {
    "body": "﻿\n\n<title>\nNote - O(n) solution\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) solution\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode* swapNodes(ListNode* head, int k) {\n<br>\n        ListNode *first=head,*second=head;\n<br>\n        for(int i=1;i&lt;k;i++)\n<br>\n           first=first-&gt;next;\n<br>\n        ListNode *temp=first;\n<br>\n        while(temp-&gt;next){\n<br>\n            temp=temp-&gt;next;\n<br>\n            second=second-&gt;next;\n<br>\n        }\n<br>\n        swap(first-&gt;val,second-&gt;val);\n<br>\n    return head;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_39": {
    "body": "﻿\n\n<title>\nNote - 21. Merge Two Sorted Lists\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n21. Merge Two Sorted Lists\n</h2>\n<hr>\n<p>\nYou are given the heads of two sorted linked lists list1 and list2.\n<br>\n\n<br>\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\n<br>\n\n<br>\nReturn the head of the merged linked list.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: list1 = [1,2,4], list2 = [1,3,4]\n<br>\nOutput: [1,1,2,3,4,4]\n<br>\nExample 2:\n<br>\n\n<br>\nInput: list1 = [], list2 = []\n<br>\nOutput: []\n<br>\nExample 3:\n<br>\n\n<br>\nInput: list1 = [], list2 = [0]\n<br>\nOutput: [0]\n</p>\n\n\n"
  },
  "note_4": {
    "body": "﻿\n\n<title>\nNote - O(n) Optimal multiply\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) Optimal multiply\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int getDecimalValue(ListNode* head) {\n<br>\n        int res=0;\n<br>\n        while(head!=NULL){\n<br>\n            res=res*2+head-&gt;val;\n<br>\n            head=head-&gt;next;\n<br>\n        }\n<br>\n        return res;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_40": {
    "body": "﻿\n\n<title>\nNote - O(n) sol\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) sol\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n<br>\n        if(!list1)return list2;\n<br>\n        else if(!list2)return list1;\n<br>\n        if(list1-&gt;val &gt; list2-&gt;val)return mergeTwoLists(list2,list1);\n<br>\n        ListNode *head = list1;\n<br>\n        ListNode *cur = list1;\n<br>\n       list1=list1-&gt;next;\n<br>\n        while(list1 &amp;&amp; list2){\n<br>\n             if(list1-&gt;val &gt; list2-&gt;val){\n<br>\n                cur-&gt;next=list2;\n<br>\n                list2=list2-&gt;next;\n<br>\n             }\n<br>\n             else{\n<br>\n                cur-&gt;next=list1;\n<br>\n                list1=list1-&gt;next;\n<br>\n             }\n<br>\n             cur=cur-&gt;next;\n<br>\n        }\n<br>\n        if(list1){\n<br>\n            cur-&gt;next=list1;\n<br>\n        }\n<br>\n        else if(list2){\n<br>\n            cur-&gt;next=list2;\n<br>\n        }\n<br>\n    return head;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_5": {
    "body": "﻿\n\n<title>\nNote - O(n) Bitwise\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) Bitwise\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int getDecimalValue(ListNode* head) {\n<br>\n        int res=0;\n<br>\n        while(head){\n<br>\n            res&lt;&lt;=1;\n<br>\n            res=res | head-&gt;val;\n<br>\n            head=head-&gt;next;\n<br>\n        }\n<br>\n    return res;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_6": {
    "body": "﻿\n\n<title>\nNote - 876. Middle of the Linked List\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n876. Middle of the Linked List\n</h2>\n<hr>\n<p>\nGiven the head of a singly linked list, return the middle node of the linked list.\n<br>\n\n<br>\nIf there are two middle nodes, return the second middle node.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2,3,4,5]\n<br>\nOutput: [3,4,5]\n<br>\nExplanation: The middle node of the list is node 3.\n<br>\nExample 2:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2,3,4,5,6]\n<br>\nOutput: [4,5,6]\n<br>\nExplanation: Since the list has two middle nodes with values 3 and 4, we return the second one.\n</p>\n\n\n"
  },
  "note_7": {
    "body": "﻿\n\n<title>\nNote - O(n) Slow Fast pointer\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) Slow Fast pointer\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode* middleNode(ListNode* head) {\n<br>\n        ListNode *slow,*fast;\n<br>\n        slow=fast=head;\n<br>\n        while(fast &amp;&amp; fast-&gt;next){\n<br>\n            fast=fast-&gt;next-&gt;next;\n<br>\n            slow=slow-&gt;next;\n<br>\n        }\n<br>\n    return slow;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_8": {
    "body": "﻿\n\n<title>\nNote - O(n) Slow &amp; Fast + Delete node\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) Slow &amp; Fast + Delete node\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    ListNode* deleteMiddle(ListNode* head) {\n<br>\n        if(!head-&gt;next)return nullptr;\n<br>\n        ListNode *slow,*fast,*prev;\n<br>\n        slow=fast=head;\n<br>\n        while(fast &amp;&amp; fast-&gt;next){\n<br>\n            prev=slow;\n<br>\n            slow=slow-&gt;next;\n<br>\n            fast=fast-&gt;next-&gt;next;\n<br>\n        }\n<br>\n       \n<br>\n        prev-&gt;next=slow-&gt;next;\n<br>\n        delete(slow);\n<br>\n     \n<br>\n    return head;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_9": {
    "body": "﻿\n\n<title>\nNote - 203. Remove Linked List Elements\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n203. Remove Linked List Elements\n</h2>\n<hr>\n<p>\nGiven the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: head = [1,2,6,3,4,5,6], val = 6\n<br>\nOutput: [1,2,3,4,5]\n<br>\nExample 2:\n<br>\n\n<br>\nInput: head = [], val = 1\n<br>\nOutput: []\n<br>\nExample 3:\n<br>\n\n<br>\nInput: head = [7,7,7,7], val = 7\n<br>\nOutput: []\n</p>\n\n\n"
  }
}

 export const coordsData = [
  {
    "coords": "1308,1271,1324,1287",
    "noteKey": "note_1"
  },
  {
    "coords": "1662,388,1678,404",
    "noteKey": "note_2"
  },
  {
    "coords": "1393,26,1409,42",
    "noteKey": "note_3"
  },
  {
    "coords": "1618,67,1634,83",
    "noteKey": "note_4"
  },
  {
    "coords": "1779,136,1795,152",
    "noteKey": "note_5"
  },
  {
    "coords": "1900,560,1916,576",
    "noteKey": "note_6"
  },
  {
    "coords": "2008,371,2024,387",
    "noteKey": "note_7"
  },
  {
    "coords": "2388,654,2404,670",
    "noteKey": "note_8"
  },
  {
    "coords": "2254,1156,2270,1172",
    "noteKey": "note_9"
  },
  {
    "coords": "2419,1126,2435,1142",
    "noteKey": "note_10"
  },
  {
    "coords": "2233,1465,2249,1481",
    "noteKey": "note_11"
  },
  {
    "coords": "2422,1520,2438,1536",
    "noteKey": "note_12"
  },
  {
    "coords": "2158,1814,2174,1830",
    "noteKey": "note_13"
  },
  {
    "coords": "2260,2004,2276,2020",
    "noteKey": "note_14"
  },
  {
    "coords": "1795,2082,1811,2098",
    "noteKey": "note_15"
  },
  {
    "coords": "1819,2315,1835,2331",
    "noteKey": "note_16"
  },
  {
    "coords": "1459,2187,1475,2203",
    "noteKey": "note_17"
  },
  {
    "coords": "1381,2470,1397,2486",
    "noteKey": "note_18"
  },
  {
    "coords": "1085,2167,1101,2183",
    "noteKey": "note_19"
  },
  {
    "coords": "993,2350,1009,2366",
    "noteKey": "note_20"
  },
  {
    "coords": "878,2088,894,2104",
    "noteKey": "note_21"
  },
  {
    "coords": "734,2259,750,2275",
    "noteKey": "note_22"
  },
  {
    "coords": "684,1964,700,1980",
    "noteKey": "note_23"
  },
  {
    "coords": "555,2141,571,2157",
    "noteKey": "note_24"
  },
  {
    "coords": "489,2069,505,2085",
    "noteKey": "note_25"
  },
  {
    "coords": "553,1796,569,1812",
    "noteKey": "note_26"
  },
  {
    "coords": "328,1906,344,1922",
    "noteKey": "note_27"
  },
  {
    "coords": "473,1535,489,1551",
    "noteKey": "note_28"
  },
  {
    "coords": "137,1609,153,1625",
    "noteKey": "note_29"
  },
  {
    "coords": "418,1222,434,1238",
    "noteKey": "note_30"
  },
  {
    "coords": "106,1289,122,1305",
    "noteKey": "note_31"
  },
  {
    "coords": "109,1123,125,1139",
    "noteKey": "note_32"
  },
  {
    "coords": "463,946,479,962",
    "noteKey": "note_33"
  },
  {
    "coords": "195,872,211,888",
    "noteKey": "note_34"
  },
  {
    "coords": "663,679,679,695",
    "noteKey": "note_35"
  },
  {
    "coords": "359,517,375,533",
    "noteKey": "note_36"
  },
  {
    "coords": "937,460,953,476",
    "noteKey": "note_37"
  },
  {
    "coords": "710,237,726,253",
    "noteKey": "note_38"
  },
  {
    "coords": "1186,366,1202,382",
    "noteKey": "note_39"
  },
  {
    "coords": "1077,173,1093,189",
    "noteKey": "note_40"
  }
]