export const notesData = {
  "note_1": {
    "body": "﻿\n\n<title>\nNote - Leetcode SlidingWindow\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nLeetcode SlidingWindow\n</h2>\n<hr>\n<p>\n3\n<br>\n76\n<br>\n424\n<br>\n438\n<br>\n713\n<br>\n1004\n<br>\n1208\n<br>\n1493\n<br>\n1695\n<br>\n1838\n<br>\n2009\n<br>\n2024\n</p>\n\n\n"
  },
  "note_10": {
    "body": "﻿\n\n<title>\nNote - 1004. Max Consecutive Ones III\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1004. Max Consecutive Ones III\n</h2>\n<hr>\n<p>\nGiven a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2\n<br>\nOutput: 6\n<br>\nExplanation: [1,1,1,0,0,1,1,1,1,1,1]\n<br>\nBolded numbers were flipped from 0 to 1. The longest subarray is underlined.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3\n<br>\nOutput: 10\n<br>\nExplanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]\n<br>\nBolded numbers were flipped from 0 to 1. The longest subarray is underlined.\n</p>\n\n\n"
  },
  "note_11": {
    "body": "﻿\n\n<title>\nNote - Shrinkable sliding window\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nShrinkable sliding window\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int longestOnes(vector&lt;int&gt;&amp; nums, int k) {\n<br>\n        int zero=0,one=0,i=0,n=nums.size(),ans=0;\n<br>\n        int freq[2]={0};\n<br>\n        for(int j=0;j&lt;n;j++){\n<br>\n            freq[nums[j]]++;\n<br>\n            while(j-i+1 - freq[1] &gt; k )freq[nums[i++]]--;\n<br>\n            ans=max(ans,j-i+1);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_12": {
    "body": "﻿\n\n<title>\nNote - 1208. Get Equal Substrings Within Budget\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1208. Get Equal Substrings Within Budget\n</h2>\n<hr>\n<p>\nYou are given two strings s and t of the same length and an integer maxCost.\n<br>\n\n<br>\nYou want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).\n<br>\n\n<br>\nReturn the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"abcd\", t = \"bcdf\", maxCost = 3\n<br>\nOutput: 3\n<br>\nExplanation: \"abc\" of s can change to \"bcd\".\n<br>\nThat costs 3, so the maximum length is 3.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"abcd\", t = \"cdef\", maxCost = 3\n<br>\nOutput: 1\n<br>\nExplanation: Each character in s costs 2 to change to character in t,  so the maximum length is 1.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"abcd\", t = \"acde\", maxCost = 0\n<br>\nOutput: 1\n<br>\nExplanation: You cannot make any change, so the maximum length is 1.\n</p>\n\n\n"
  },
  "note_13": {
    "body": "﻿\n\n<title>\nNote - O(n) Shrinkable\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) Shrinkable\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int equalSubstring(string s, string t, int maxCost) {\n<br>\n        int i=0,ans=0,n=s.length(),curSum=0;\n<br>\n        for(int j=0;j&lt;n;j++){\n<br>\n            curSum+=abs(s[j]-t[j]);\n<br>\n            while(curSum &gt; maxCost &amp;&amp; i&lt;=j){\n<br>\n                curSum-=abs(s[i]-t[i]);\n<br>\n                i++;\n<br>\n            }\n<br>\n            ans=max(ans,j-i+1);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_14": {
    "body": "﻿\n\n<title>\nNote - 1493. Longest Subarray of 1's After Deleting One Element\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1493. Longest Subarray of 1's After Deleting One Element\n</h2>\n<hr>\n<p>\nGiven a binary array nums, you should delete one element from it.\n<br>\n\n<br>\nReturn the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [1,1,0,1]\n<br>\nOutput: 3\n<br>\nExplanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [0,1,1,1,0,1,1,0,1]\n<br>\nOutput: 5\n<br>\nExplanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].\n<br>\nExample 3:\n<br>\n\n<br>\nInput: nums = [1,1,1]\n<br>\nOutput: 2\n<br>\nExplanation: You must delete one element.\n</p>\n\n\n"
  },
  "note_15": {
    "body": "﻿\n\n<title>\nNote - Shrinkable\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nShrinkable\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int longestSubarray(vector&lt;int&gt;&amp; nums) {\n<br>\n         int i=0,ans=0,n=nums.size();\n<br>\n         int freq[2]={0};\n<br>\n        for(int j=0;j&lt;n;j++){\n<br>\n           freq[nums[j]]++;\n<br>\n            while(freq[0] &gt; 1 &amp;&amp; i&lt;=j){\n<br>\n                freq[nums[i++]]--;\n<br>\n            }\n<br>\n            ans=max(ans,j-i);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_16": {
    "body": "﻿\n\n<title>\nNote - 1695. Maximum Erasure Value\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1695. Maximum Erasure Value\n</h2>\n<hr>\n<p>\nYou are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.\n<br>\n\n<br>\nReturn the maximum score you can get by erasing exactly one subarray.\n<br>\n\n<br>\nAn array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [4,2,4,5,6]\n<br>\nOutput: 17\n<br>\nExplanation: The optimal subarray here is [2,4,5,6].\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [5,2,1,2,5,2,1,2,5]\n<br>\nOutput: 8\n<br>\nExplanation: The optimal subarray here is [5,2,1] or [1,2,5].\n</p>\n\n\n"
  },
  "note_17": {
    "body": "﻿\n\n<title>\nNote - dynamic Array\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\ndynamic Array\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int maximumUniqueSubarray(vector&lt;int&gt;&amp; nums) {\n<br>\n        int mini=*min_element(nums.begin(),nums.end());\n<br>\n        int maxi=*max_element(nums.begin(),nums.end());\n<br>\n        int sz = maxi-mini+1;\n<br>\n        vector&lt;int&gt;visit(sz,0);\n<br>\n\n<br>\n        int i=0,ans=0,curSum=0,n=nums.size();\n<br>\n        for(int j=0;j&lt;n;j++){\n<br>\n            visit[nums[j]-mini]++;\n<br>\n            curSum+=nums[j];\n<br>\n            while(visit[nums[j]-mini]&gt;1 &amp;&amp; i&lt;=j){\n<br>\n                visit[nums[i]-mini]--;\n<br>\n                curSum-=nums[i++];\n<br>\n            }\n<br>\n            ans=max(ans,curSum);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_18": {
    "body": "﻿\n\n<title>\nNote - Constant Array\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nConstant Array\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int maximumUniqueSubarray(vector&lt;int&gt;&amp; nums) {\n<br>\n        vector&lt;int&gt;visit(10001,0);\n<br>\n        int i=0,ans=0,curSum=0,n=nums.size();\n<br>\n        for(int j=0;j&lt;n;j++){\n<br>\n            visit[nums[j]]++;\n<br>\n            curSum+=nums[j];\n<br>\n            while(visit[nums[j]]&gt;1 &amp;&amp; i&lt;=j){\n<br>\n                visit[nums[i]]--;\n<br>\n                curSum-=nums[i++];\n<br>\n            }\n<br>\n            ans=max(ans,curSum);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_19": {
    "body": "﻿\n\n<title>\nNote - 1838. Frequency of the Most Frequent Element\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1838. Frequency of the Most Frequent Element\n</h2>\n<hr>\n<p>\nThe frequency of an element is the number of times it occurs in an array.\n<br>\n\n<br>\nYou are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.\n<br>\n\n<br>\nReturn the maximum possible frequency of an element after performing at most k operations.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [1,2,4], k = 5\n<br>\nOutput: 3\n<br>\nExplanation: Increment the first element three times and the second element two times to make nums = [4,4,4].\n<br>\n4 has a frequency of 3.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [1,4,8,13], k = 5\n<br>\nOutput: 2\n<br>\nExplanation: There are multiple optimal solutions:\n<br>\n- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.\n<br>\n- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.\n<br>\n- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: nums = [3,9,6], k = 2\n<br>\nOutput: 1\n</p>\n\n\n"
  },
  "note_2": {
    "body": "﻿\n\n<title>\nNote - 3. Longest Substring Without Repeating Characters\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n3. Longest Substring Without Repeating Characters\n</h2>\n<hr>\n<p>\nGiven a string s, find the length of the longest substring without duplicate characters.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"abcabcbb\"\n<br>\nOutput: 3\n<br>\nExplanation: The answer is \"abc\", with the length of 3.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"bbbbb\"\n<br>\nOutput: 1\n<br>\nExplanation: The answer is \"b\", with the length of 1.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"pwwkew\"\n<br>\nOutput: 3\n<br>\nExplanation: The answer is \"wke\", with the length of 3.\n<br>\nNotice that the answer must be a substring, \"pwke\" is a subsequence and not a substring.\n</p>\n\n\n"
  },
  "note_20": {
    "body": "﻿\n\n<title>\nNote - O(nlogn) shrinkable\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(nlogn) shrinkable\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int maxFrequency(vector&lt;int&gt;&amp; nums, int k) {\n<br>\n           sort(nums.begin(),nums.end());  \n<br>\n           int n=nums.size(),i=0,ans=0;\n<br>\n           long long curSum=0;\n<br>\n           for(int j=0;j&lt;n;j++){\n<br>\n              curSum+=nums[j];\n<br>\n              while((static_cast&lt;long long&gt;(j-i+1)*nums[j])-curSum &gt; k &amp;&amp; i&lt;=j){\n<br>\n                  curSum-=nums[i++];\n<br>\n              }\n<br>\n              ans=max(ans,j-i+1);\n<br>\n           }     \n<br>\n        return ans;              \n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_21": {
    "body": "﻿\n\n<title>\nNote - 2024. Maximize the Confusion of an Exam\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2024. Maximize the Confusion of an Exam\n</h2>\n<hr>\n<p>\nA teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).\n<br>\n\n<br>\nYou are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:\n<br>\n\n<br>\nChange the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').\n<br>\nReturn the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: answerKey = \"TTFF\", k = 2\n<br>\nOutput: 4\n<br>\nExplanation: We can replace both the 'F's with 'T's to make answerKey = \"TTTT\".\n<br>\nThere are four consecutive 'T's.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: answerKey = \"TFFT\", k = 1\n<br>\nOutput: 3\n<br>\nExplanation: We can replace the first 'T' with an 'F' to make answerKey = \"FFFT\".\n<br>\nAlternatively, we can replace the second 'T' with an 'F' to make answerKey = \"TFFF\".\n<br>\nIn both cases, there are three consecutive 'F's.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: answerKey = \"TTFTTFTT\", k = 1\n<br>\nOutput: 5\n<br>\nExplanation: We can replace the first 'F' to make answerKey = \"TTTTTFTT\"\n<br>\nAlternatively, we can replace the second 'F' to make answerKey = \"TTFTTTTT\". \n<br>\nIn both cases, there are five consecutive 'T's.\n</p>\n\n\n"
  },
  "note_22": {
    "body": "﻿\n\n<title>\nNote - 2 pass \n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2 pass \n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int maxConsecutiveAnswers(string s, int k) {\n<br>\n        int i = 0, ans = 0, n = s.length();\n<br>\n        int t = 0, f = 0;\n<br>\n        for (int j = 0; j &lt; n; j++) {\n<br>\n            if (s[j] == 'T')\n<br>\n                t++;\n<br>\n            while (j - i + 1 - t &gt; k &amp;&amp; i &lt;= j) {\n<br>\n                if (s[i] == 'T')\n<br>\n                    t--;\n<br>\n                i++;\n<br>\n            }\n<br>\n            ans = max(ans, j - i + 1);\n<br>\n        }\n<br>\n        t=0,f=0,i=0;\n<br>\n        for (int j = 0; j &lt; n; j++) {\n<br>\n            if (s[j] == 'F')\n<br>\n                f++;\n<br>\n            while (j - i + 1 - f &gt; k &amp;&amp; i &lt;= j) {\n<br>\n                if (s[i] == 'F')\n<br>\n                    f--;\n<br>\n                i++;\n<br>\n            }\n<br>\n            ans = max(ans, j - i + 1);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_23": {
    "body": "﻿\n\n<title>\nNote - 1 Pass\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1 Pass\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int maxConsecutiveAnswers(string s, int k) {\n<br>\n        int i = 0, ans = 0, n = s.length();\n<br>\n        int t = 0, f = 0;\n<br>\n        for (int j = 0; j &lt; n; j++) {\n<br>\n            if (s[j] == 'T')\n<br>\n                t++;\n<br>\n            else\n<br>\n               f++;\n<br>\n            while (min(t,f) &gt; k &amp;&amp; i &lt;= j) {\n<br>\n                if (s[i] == 'T')\n<br>\n                    t--;\n<br>\n                else\n<br>\n                   f--;\n<br>\n                i++;\n<br>\n            }\n<br>\n            ans = max(ans, j - i + 1);\n<br>\n        }\n<br>\n      \n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_24": {
    "body": "﻿\n\n<title>\nNote - shrinkable\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nshrinkable\n</h2>\n<hr>\n<p>\nint i = 0, j = 0, ans = 0;\n<br>\nfor (; j &lt; N; ++j) {\n<br>\n    // CODE: use A[j] to update state which might make the window invalid\n<br>\n    for (; invalid(); ++i) { // when invalid, keep shrinking the left edge until it's valid again\n<br>\n        // CODE: update state using A[i]\n<br>\n    }\n<br>\n    ans = max(ans, j - i + 1); // the window [i, j] is the maximum window we've found thus far\n<br>\n}\n<br>\nreturn ans;\n</p>\n\n\n"
  },
  "note_25": {
    "body": "﻿\n\n<title>\nNote - non shrinkable\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nnon shrinkable\n</h2>\n<hr>\n<p>\n// OJ: https://leetcode.com/problems/frequency-of-the-most-frequent-element/\n<br>\n// Author: github.com/lzl124631x\n<br>\n// Time: O(NlogN)\n<br>\n// Space: O(1)\n<br>\nclass Solution {\n<br>\npublic:\n<br>\n    int maxFrequency(vector&lt;int&gt;&amp; A, int k) {\n<br>\n        sort(begin(A), end(A));\n<br>\n        long i = 0, N = A.size(), ans = 1, sum = 0;\n<br>\n        for (int j = 0; j &lt; N; ++j) {\n<br>\n            sum += A[j];\n<br>\n            while ((j - i + 1) * A[j] - sum &gt; k) sum -= A[i++];\n<br>\n            ans = max(ans, j - i + 1);\n<br>\n        }\n<br>\n        return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_26": {
    "body": "﻿\n\n<title>\nNote - shrinkable\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nshrinkable\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int minOperations(vector&lt;int&gt;&amp; nums) {\n<br>\n        int n=nums.size();\n<br>\n        sort(nums.begin(),nums.end());\n<br>\n        nums.erase(unique(nums.begin(),nums.end()),nums.end());\n<br>\n        int left=0,ans=0;\n<br>\n        for(int right=0;right&lt;nums.size();right++){\n<br>\n            while(left &lt; n &amp;&amp; nums[left]+n &lt;= nums[right])left++;\n<br>\n            ans=max(ans,right-left+1);\n<br>\n        }\n<br>\n    return n-ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_27": {
    "body": "﻿\n\n<title>\nNote - Sliding Window Other pattern\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nSliding Window Other pattern\n</h2>\n<hr>\n<p>\n438\n</p>\n\n\n"
  },
  "note_28": {
    "body": "﻿\n\n<title>\nNote - 2 array\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2 array\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    vector&lt;int&gt; findAnagrams(string s, string p) {\n<br>\n        vector&lt;int&gt;sf(26,0),pf(26,0);\n<br>\n        int n=s.length(),m=p.length();\n<br>\n        if(m&gt;n)return {};\n<br>\n        vector&lt;int&gt;ans;\n<br>\n        for(int i=0;i&lt;m;i++){\n<br>\n            sf[s[i]-'a']++;\n<br>\n            pf[p[i]-'a']++;\n<br>\n        }\n<br>\n        if(sf==pf)ans.push_back(0);\n<br>\n        for(int i=m;i&lt;n;i++){\n<br>\n            sf[s[i]-'a']++;\n<br>\n            sf[s[i-m]-'a']--;\n<br>\n            if(sf==pf)ans.push_back(i-m+1);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_29": {
    "body": "﻿\n\n<title>\nNote - map\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nmap\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    vector&lt;int&gt; findAnagrams(string s, string p) {\n<br>\n        unordered_map&lt;char, int&gt; mp;\n<br>\n        int n = s.length(), m = p.length();\n<br>\n        vector&lt;int&gt; ans;\n<br>\n\n<br>\n        if (m &gt; n) return ans;\n<br>\n\n<br>\n        // Populate frequency map for the pattern\n<br>\n        for (char &amp;c : p) mp[c]++;\n<br>\n        int uniqueChar = mp.size();\n<br>\n\n<br>\n        int left = 0, right = 0;\n<br>\n\n<br>\n        while (right &lt; n) {\n<br>\n            char cur_ch = s[right];\n<br>\n            \n<br>\n            if (mp.count(cur_ch)) {\n<br>\n                mp[cur_ch]--;\n<br>\n                if (mp[cur_ch] == 0) uniqueChar--;\n<br>\n            }\n<br>\n            right++;\n<br>\n\n<br>\n            while (uniqueChar == 0) {\n<br>\n                if (right - left == m) ans.push_back(left);\n<br>\n\n<br>\n                char begin_char = s[left];\n<br>\n                if (mp.count(begin_char)) {\n<br>\n                    mp[begin_char]++;\n<br>\n                    if (mp[begin_char] &gt; 0) uniqueChar++;\n<br>\n                }\n<br>\n                left++;\n<br>\n            }\n<br>\n        }\n<br>\n\n<br>\n        return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_3": {
    "body": "﻿\n\n<title>\nNote - Shrinkable\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nShrinkable\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int lengthOfLongestSubstring(string s) {\n<br>\n        vector&lt;bool&gt;visit(256,false);\n<br>\n        int i=0,j=0,ans=0,n=s.length();\n<br>\n        for(;j&lt;n;j++){\n<br>\n            while(visit[s[j]] &amp;&amp; i&lt;=j){\n<br>\n                 visit[s[i]]=false;\n<br>\n                 i++;\n<br>\n            }\n<br>\n            visit[s[j]]=true;\n<br>\n            ans=max(ans,j-i+1);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_30": {
    "body": "﻿\n\n<title>\nNote - Template\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nTemplate\n</h2>\n<hr>\n<p>\npublic class Solution {\n<br>\n    public List&lt;Integer&gt; slidingWindowTemplateByHarryChaoyangHe(String s, String t) {\n<br>\n        //init a collection or int value to save the result according the question.\n<br>\n        List&lt;Integer&gt; result = new LinkedList&lt;&gt;();\n<br>\n        if(t.length()&gt; s.length()) return result;\n<br>\n        \n<br>\n        //create a hashmap to save the Characters of the target substring.\n<br>\n        //(K, V) = (Character, Frequence of the Characters)\n<br>\n        Map&lt;Character, Integer&gt; map = new HashMap&lt;&gt;();\n<br>\n        for(char c : t.toCharArray()){\n<br>\n            map.put(c, map.getOrDefault(c, 0) + 1);\n<br>\n        }\n<br>\n        //maintain a counter to check whether match the target string.\n<br>\n        int counter = map.size();//must be the map size, NOT the string size because the char may be duplicate.\n<br>\n        \n<br>\n        //Two Pointers: begin - left pointer of the window; end - right pointer of the window\n<br>\n        int begin = 0, end = 0;\n<br>\n        \n<br>\n        //the length of the substring which match the target string.\n<br>\n        int len = Integer.MAX_VALUE; \n<br>\n        \n<br>\n        //loop at the begining of the source string\n<br>\n        while(end &lt; s.length()){\n<br>\n            \n<br>\n            char c = s.charAt(end);//get a character\n<br>\n            \n<br>\n            if( map.containsKey(c) ){\n<br>\n                map.put(c, map.get(c)-1);// plus or minus one\n<br>\n                if(map.get(c) == 0) counter--;//modify the counter according the requirement(different condition).\n<br>\n            }\n<br>\n            end++;\n<br>\n            \n<br>\n            //increase begin pointer to make it invalid/valid again\n<br>\n            while(counter == 0 /* counter condition. different question may have different condition */){\n<br>\n                \n<br>\n                char tempc = s.charAt(begin);//***be careful here: choose the char at begin pointer, NOT the end pointer\n<br>\n                if(map.containsKey(tempc)){\n<br>\n                    map.put(tempc, map.get(tempc) + 1);//plus or minus one\n<br>\n                    if(map.get(tempc) &gt; 0) counter++;//modify the counter according the requirement(different condition).\n<br>\n                }\n<br>\n                \n<br>\n                /* save / update(min/max) the result if find a target*/\n<br>\n                // result collections or result int value\n<br>\n                \n<br>\n                begin++;\n<br>\n            }\n<br>\n        }\n<br>\n        return result;\n<br>\n    }\n<br>\n}\n</p>\n\n\n"
  },
  "note_31": {
    "body": "﻿\n\n<title>\nNote - 76. Minimum Window Substring\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n76. Minimum Window Substring\n</h2>\n<hr>\n<p>\nGiven two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".\n<br>\n\n<br>\nThe testcases will be generated such that the answer is unique.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"ADOBECODEBANC\", t = \"ABC\"\n<br>\nOutput: \"BANC\"\n<br>\nExplanation: The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"a\", t = \"a\"\n<br>\nOutput: \"a\"\n<br>\nExplanation: The entire string s is the minimum window.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"a\", t = \"aa\"\n<br>\nOutput: \"\"\n<br>\nExplanation: Both 'a's from t must be included in the window.\n<br>\nSince the largest window of s only has one 'a', return empty string.\n</p>\n\n\n"
  },
  "note_32": {
    "body": "﻿\n\n<title>\nNote - map\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nmap\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    string minWindow(string s, string t) {\n<br>\n        if (t.size() &gt; s.size()) return \"\";\n<br>\n\n<br>\n        unordered_map&lt;char, int&gt; charFrequency; // Frequency map for characters in 't'\n<br>\n        for (char c : t) charFrequency[c]++;\n<br>\n\n<br>\n        int required = charFrequency.size(); // Unique characters needed\n<br>\n        int left = 0, right = 0, minLength = INT_MAX, startIndex = 0;\n<br>\n        int matched = 0; // Tracks when all required characters are matched\n<br>\n\n<br>\n        while (right &lt; s.size()) {\n<br>\n            // Expand the window by including the current character\n<br>\n            char rightChar = s[right++];\n<br>\n            if (charFrequency.count(rightChar)) {\n<br>\n                charFrequency[rightChar]--;\n<br>\n                if (charFrequency[rightChar] == 0) matched++;\n<br>\n            }\n<br>\n\n<br>\n            // Contract the window from the left as long as it's valid\n<br>\n            while (matched == required) {\n<br>\n                // Update the minimum window size if a smaller valid window is found\n<br>\n                if (minLength &gt; (right - left)) {\n<br>\n                    minLength = right - left;\n<br>\n                    startIndex = left;\n<br>\n                }\n<br>\n\n<br>\n                char leftChar = s[left++];\n<br>\n                if (charFrequency.count(leftChar)) {\n<br>\n                    if (charFrequency[leftChar] == 0) matched--;\n<br>\n                    charFrequency[leftChar]++;\n<br>\n                }\n<br>\n            }\n<br>\n        }\n<br>\n\n<br>\n        return minLength == INT_MAX ? \"\" : s.substr(startIndex, minLength);\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_33": {
    "body": "﻿\n\n<title>\nNote - 3. Longest Substring Without Repeating Characters\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n3. Longest Substring Without Repeating Characters\n</h2>\n<hr>\n<p>\nGiven a string s, find the length of the longest substring without duplicate characters.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"abcabcbb\"\n<br>\nOutput: 3\n<br>\nExplanation: The answer is \"abc\", with the length of 3.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"bbbbb\"\n<br>\nOutput: 1\n<br>\nExplanation: The answer is \"b\", with the length of 1.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"pwwkew\"\n<br>\nOutput: 3\n<br>\nExplanation: The answer is \"wke\", with the length of 3.\n<br>\nNotice that the answer must be a substring, \"pwke\" is a subsequence and not a substring.\n</p>\n\n\n"
  },
  "note_34": {
    "body": "﻿\n\n<title>\nNote - map\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nmap\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int lengthOfLongestSubstring(string s) {\n<br>\n        unordered_map&lt;char,int&gt;mp;\n<br>\n        int n=s.length();\n<br>\n        int right=0,left=0,ans=0,counter=0;\n<br>\n        while(right&lt;n){\n<br>\n            mp[s[right]]++;\n<br>\n            if(mp[s[right]]&gt;1)counter++;\n<br>\n            right++;\n<br>\n            while(counter&gt;0){\n<br>\n                if(mp[s[left]]&gt;1)counter--;\n<br>\n                mp[s[left]]--;\n<br>\n                left++;\n<br>\n            }\n<br>\n            ans=max(ans,right-left);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_4": {
    "body": "﻿\n\n<title>\nNote - O(n) non-shrinkable\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) non-shrinkable\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int lengthOfLongestSubstring(string s) {\n<br>\n        vector&lt;int&gt;visit(128,-1);\n<br>\n        int i=-1,j=0,ans=0,n=s.length();\n<br>\n        for(;j&lt;n;j++){\n<br>\n            i=max(i,visit[s[j]]);\n<br>\n            visit[s[j]]=j;\n<br>\n            ans=max(ans,j-i);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_5": {
    "body": "﻿\n\n<title>\nNote - 424. Longest Repeating Character Replacement\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n424. Longest Repeating Character Replacement\n</h2>\n<hr>\n<p>\nYou are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.\n<br>\n\n<br>\nReturn the length of the longest substring containing the same letter you can get after performing the above operations.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"ABAB\", k = 2\n<br>\nOutput: 4\n<br>\nExplanation: Replace the two 'A's with two 'B's or vice versa.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"AABABBA\", k = 1\n<br>\nOutput: 4\n<br>\nExplanation: Replace the one 'A' in the middle with 'B' and form \"AABBBBA\".\n<br>\nThe substring \"BBBB\" has the longest repeating letters, which is 4.\n<br>\nThere may exists other ways to achieve this answer too.\n</p>\n\n\n"
  },
  "note_6": {
    "body": "﻿\n\n<title>\nNote - Shrinkable sliding window\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nShrinkable sliding window\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int find_max(vector&lt;int&gt;&amp;arr){\n<br>\n        int maxi=0;\n<br>\n        for(int &amp;it: arr)maxi=max(maxi,it);\n<br>\n    return maxi;\n<br>\n    }\n<br>\n    int characterReplacement(string s, int k) {\n<br>\n        vector&lt;int&gt;freq(26,0);\n<br>\n        int i=0,j=0,ans=0,n=s.length();\n<br>\n        for(;j&lt;n;j++){\n<br>\n            freq[s[j]-'A']++;\n<br>\n            while((j-i+1) - find_max(freq)&gt;k)freq[s[i++]-'A']--;\n<br>\n            ans=max(ans,j-i+1);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_7": {
    "body": "﻿\n\n<title>\nNote - O(n) shrinkable\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) shrinkable\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n\n<br>\n    int characterReplacement(string s, int k) {\n<br>\n        vector&lt;int&gt; freq(26, 0);\n<br>\n        int maxi=0;\n<br>\n        int i = 0, j = 0, ans = 0, n = s.length();\n<br>\n        for (; j &lt; n; j++) {\n<br>\n            maxi=max(maxi,++freq[s[j] - 'A']);\n<br>\n            while ((j - i + 1) - maxi &gt; k) {\n<br>\n                freq[s[i++] - 'A']--;\n<br>\n            }\n<br>\n            ans = max(ans, j - i + 1);\n<br>\n        }\n<br>\n        return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_8": {
    "body": "﻿\n\n<title>\nNote - 713. Subarray Product Less Than K\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n713. Subarray Product Less Than K\n</h2>\n<hr>\n<p>\nGiven an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [10,5,2,6], k = 100\n<br>\nOutput: 8\n<br>\nExplanation: The 8 subarrays that have product less than 100 are:\n<br>\n[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]\n<br>\nNote that [10, 5, 2] is not included as the product of 100 is not strictly less than k.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [1,2,3], k = 0\n<br>\nOutput: 0\n</p>\n\n\n"
  },
  "note_9": {
    "body": "﻿\n\n<title>\nNote - Shrinkable sliding window\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nShrinkable sliding window\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int numSubarrayProductLessThanK(vector&lt;int&gt;&amp; nums, int k) {\n<br>\n        int i = 0, j = 0, ans = 0, n = nums.size();\n<br>\n        int curProd = 1, cur = 0;\n<br>\n        for (; j &lt; n; j++) {\n<br>\n            curProd *= nums[j];\n<br>\n            while (curProd &gt;= k &amp;&amp; i &lt;= j) {\n<br>\n                curProd = curProd / nums[i++];\n<br>\n            }\n<br>\n            ans += j-i+1; \n<br>\n        }\n<br>\n        return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  }
}

 export const coordsData = [
  {
    "coords": "1082,984,1098,1000",
    "noteKey": "note_1"
  },
  {
    "coords": "1379,370,1395,386",
    "noteKey": "note_2"
  },
  {
    "coords": "1150,26,1166,42",
    "noteKey": "note_3"
  },
  {
    "coords": "1456,115,1472,131",
    "noteKey": "note_4"
  },
  {
    "coords": "1695,627,1711,643",
    "noteKey": "note_5"
  },
  {
    "coords": "1791,359,1807,375",
    "noteKey": "note_6"
  },
  {
    "coords": "1907,594,1923,610",
    "noteKey": "note_7"
  },
  {
    "coords": "1757,971,1773,987",
    "noteKey": "note_8"
  },
  {
    "coords": "1974,966,1990,982",
    "noteKey": "note_9"
  },
  {
    "coords": "1678,1263,1694,1279",
    "noteKey": "note_10"
  },
  {
    "coords": "1872,1374,1888,1390",
    "noteKey": "note_11"
  },
  {
    "coords": "1518,1512,1534,1528",
    "noteKey": "note_12"
  },
  {
    "coords": "1568,1733,1584,1749",
    "noteKey": "note_13"
  },
  {
    "coords": "1180,1642,1196,1658",
    "noteKey": "note_14"
  },
  {
    "coords": "992,1961,1008,1977",
    "noteKey": "note_15"
  },
  {
    "coords": "720,1533,736,1549",
    "noteKey": "note_16"
  },
  {
    "coords": "596,1768,612,1784",
    "noteKey": "note_17"
  },
  {
    "coords": "458,1676,474,1692",
    "noteKey": "note_18"
  },
  {
    "coords": "560,1284,576,1300",
    "noteKey": "note_19"
  },
  {
    "coords": "171,1422,187,1438",
    "noteKey": "note_20"
  },
  {
    "coords": "475,913,491,929",
    "noteKey": "note_21"
  },
  {
    "coords": "84,999,100,1015",
    "noteKey": "note_22"
  },
  {
    "coords": "110,775,126,791",
    "noteKey": "note_23"
  },
  {
    "coords": "286,616,302,632",
    "noteKey": "note_24"
  },
  {
    "coords": "368,506,384,522",
    "noteKey": "note_25"
  },
  {
    "coords": "601,75,617,91",
    "noteKey": "note_26"
  },
  {
    "coords": "2924,1006,2940,1022",
    "noteKey": "note_27"
  },
  {
    "coords": "3096,456,3112,472",
    "noteKey": "note_28"
  },
  {
    "coords": "3391,806,3407,822",
    "noteKey": "note_29"
  },
  {
    "coords": "3195,1174,3211,1190",
    "noteKey": "note_30"
  },
  {
    "coords": "2922,1418,2938,1434",
    "noteKey": "note_31"
  },
  {
    "coords": "2823,1625,2839,1641",
    "noteKey": "note_32"
  },
  {
    "coords": "2602,861,2618,877",
    "noteKey": "note_33"
  },
  {
    "coords": "2157,761,2173,777",
    "noteKey": "note_34"
  }
]