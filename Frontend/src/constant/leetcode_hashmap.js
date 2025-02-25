export const notesData = {
  "note_1": {
    "body": "﻿\n\n<title>\nNote - 1. Two Sum\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1. Two Sum\n</h2>\n<hr>\n<p>\n1. Two Sum\n<br>\nGiven an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n<br>\n\n<br>\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n<br>\n\n<br>\nYou can return the answer in any order.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [2,7,11,15], target = 9\n<br>\nOutput: [0,1]\n<br>\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [3,2,4], target = 6\n<br>\nOutput: [1,2]\n<br>\nExample 3:\n<br>\n\n<br>\nInput: nums = [3,3], target = 6\n<br>\nOutput: [0,1]\n</p>\n\n\n"
  },
  "note_10": {
    "body": "﻿\n\n<title>\nNote - 1679. Max Number of K-Sum Pairs\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1679. Max Number of K-Sum Pairs\n</h2>\n<hr>\n<p>\nYou are given an integer array nums and an integer k.\n<br>\n\n<br>\nIn one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.\n<br>\n\n<br>\nReturn the maximum number of operations you can perform on the array.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [1,2,3,4], k = 5\n<br>\nOutput: 2\n<br>\nExplanation: Starting with nums = [1,2,3,4]:\n<br>\n- Remove numbers 1 and 4, then nums = [2,3]\n<br>\n- Remove numbers 2 and 3, then nums = []\n<br>\nThere are no more pairs that sum up to 5, hence a total of 2 operations.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [3,1,3,4,3], k = 6\n<br>\nOutput: 1\n<br>\nExplanation: Starting with nums = [3,1,3,4,3]:\n<br>\n- Remove the first two 3's, then nums = [1,4,3]\n<br>\nThere are no more pairs that sum up to 6, hence a total of 1 operation.\n</p>\n\n\n"
  },
  "note_11": {
    "body": "﻿\n\n<title>\nNote - O(nlogn) 2 pointer\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(nlogn) 2 pointer\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int maxOperations(vector&lt;int&gt;&amp; nums, int k) {\n<br>\n        sort(nums.begin(),nums.end());\n<br>\n        int n=nums.size();\n<br>\n        int i=0,j=n-1;\n<br>\n        int ans=0;\n<br>\n        while(i&lt;j){\n<br>\n            int sum = nums[i]+nums[j];\n<br>\n            if(sum&gt;k)j--;\n<br>\n            else if(sum&lt;k)i++;\n<br>\n            else{\n<br>\n                ans++;\n<br>\n                i++;\n<br>\n                j--;\n<br>\n            }\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_12": {
    "body": "﻿\n\n<title>\nNote - 1711. Count Good Meals\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1711. Count Good Meals\n</h2>\n<hr>\n<p>\nA good meal is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two.\n<br>\n\n<br>\nYou can pick any two different foods to make a good meal.\n<br>\n\n<br>\nGiven an array of integers deliciousness where deliciousness[i] is the deliciousness of the i​​​​​​th​​​​​​​​ item of food, return the number of different good meals you can make from this list modulo 109 + 7.\n<br>\n\n<br>\nNote that items with different indices are considered different even if they have the same deliciousness value.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: deliciousness = [1,3,5,7,9]\n<br>\nOutput: 4\n<br>\nExplanation: The good meals are (1,3), (1,7), (3,5) and, (7,9).\n<br>\nTheir respective sums are 4, 8, 8, and 16, all of which are powers of 2.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: deliciousness = [1,1,1,3,3,3,7]\n<br>\nOutput: 15\n<br>\nExplanation: The good meals are (1,1) with 3 ways, (1,3) with 9 ways, and (1,7) with 3 ways.\n</p>\n\n\n"
  },
  "note_13": {
    "body": "﻿\n\n<title>\nNote - hashmap\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nhashmap\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int countPairs(vector&lt;int&gt;&amp; del) {\n<br>\n        int n = del.size();\n<br>\n        int ans = 0;\n<br>\n        int mod = 1e9+7;\n<br>\n        unordered_map&lt;int,int&gt;mp;\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n            for(int power = 1;power &lt;= (1&lt;&lt;21);power=power*2){\n<br>\n                if(mp.find(power-del[i])!=mp.end()){\n<br>\n                    ans= (ans + mp[power-del[i]])%mod;\n<br>\n                }\n<br>\n            }\n<br>\n            mp[del[i]]++;\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_14": {
    "body": "﻿\n\n<title>\nNote - 2491. Divide Players Into\nTeams of Equal Skill\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2491. Divide Players Into\nTeams of Equal Skill\n</h2>\n<hr>\n<p>\nYou are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.\n<br>\n\n<br>\nThe chemistry of a team is equal to the product of the skills of the players on that team.\n<br>\n\n<br>\nReturn the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: skill = [3,2,5,1,3,4]\n<br>\nOutput: 22\n<br>\nExplanation: \n<br>\nDivide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.\n<br>\nThe sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: skill = [3,4]\n<br>\nOutput: 12\n<br>\nExplanation: \n<br>\nThe two players form a team with a total skill of 7.\n<br>\nThe chemistry of the team is 3 * 4 = 12.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: skill = [1,1,2,3]\n<br>\nOutput: -1\n<br>\nExplanation: \n<br>\nThere is no way to divide the players into teams such that the total skill of each team is equal.\n</p>\n\n\n"
  },
  "note_15": {
    "body": "﻿\n\n<title>\nNote - O(n) hash table\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) hash table\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    long long dividePlayers(vector&lt;int&gt;&amp; skill) {\n<br>\n        int hash[2001]={0};\n<br>\n        int tsum = 0,n=skill.size();\n<br>\n        for(int &amp;it: skill){\n<br>\n            hash[it]++;\n<br>\n            tsum+=it;\n<br>\n        }\n<br>\n        int team_sum =(tsum*2)/n;\n<br>\n        if(n&gt;2 &amp;&amp; tsum%(n/2)!=0)return -1;\n<br>\n        long long ans=0;\n<br>\n        for(int &amp;it: skill){\n<br>\n            if(hash[it]&gt;0 &amp;&amp; hash[team_sum-it]&gt;0){\n<br>\n                hash[it]--;\n<br>\n                hash[team_sum-it]--;\n<br>\n                ans+=(it*(team_sum-it));\n<br>\n            }\n<br>\n        }\n<br>\n        for(int i=0;i&lt;=2000;i++)\n<br>\n            if(hash[i]&gt;0)return -1;\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_16": {
    "body": "﻿\n\n<title>\nNote - 2023. Number of Pairs of Strings With\nConcatenation Equal to Target\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2023. Number of Pairs of Strings With\nConcatenation Equal to Target\n</h2>\n<hr>\n<p>\nGiven an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [\"777\",\"7\",\"77\",\"77\"], target = \"7777\"\n<br>\nOutput: 4\n<br>\nExplanation: Valid pairs are:\n<br>\n- (0, 1): \"777\" + \"7\"\n<br>\n- (1, 0): \"7\" + \"777\"\n<br>\n- (2, 3): \"77\" + \"77\"\n<br>\n- (3, 2): \"77\" + \"77\"\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [\"123\",\"4\",\"12\",\"34\"], target = \"1234\"\n<br>\nOutput: 2\n<br>\nExplanation: Valid pairs are:\n<br>\n- (0, 1): \"123\" + \"4\"\n<br>\n- (2, 3): \"12\" + \"34\"\n<br>\nExample 3:\n<br>\n\n<br>\nInput: nums = [\"1\",\"1\",\"1\"], target = \"11\"\n<br>\nOutput: 6\n<br>\nExplanation: Valid pairs are:\n<br>\n- (0, 1): \"1\" + \"1\"\n<br>\n- (1, 0): \"1\" + \"1\"\n<br>\n- (0, 2): \"1\" + \"1\"\n<br>\n- (2, 0): \"1\" + \"1\"\n<br>\n- (1, 2): \"1\" + \"1\"\n<br>\n- (2, 1): \"1\" + \"1\"\n</p>\n\n\n"
  },
  "note_17": {
    "body": "﻿\n\n<title>\nNote - hashmap + prefix + suffix\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nhashmap + prefix + suffix\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool isSuffix(const string &amp;s, const string &amp;t) {\n<br>\n        int sl = s.length();\n<br>\n        int tl = t.length();\n<br>\n        if (sl &gt; tl) return false;\n<br>\n        return t.substr(tl - sl) == s; // Check if `s` is a suffix of `t`\n<br>\n    }\n<br>\n\n<br>\n    bool isPrefix(const string &amp;s, const string &amp;t) {\n<br>\n        int sl = s.length();\n<br>\n        int tl = t.length();\n<br>\n        if (sl &gt; tl) return false;\n<br>\n        return t.substr(0, sl) == s; // Check if `s` is a prefix of `t`\n<br>\n    }\n<br>\n    int numOfPairs(vector&lt;string&gt;&amp; nums, string t) {\n<br>\n        unordered_map&lt;int,int&gt;mp;\n<br>\n        int n=nums.size();\n<br>\n        int ans=0;\n<br>\n        for(string &amp;num: nums){\n<br>\n           if(isSuffix(num,t)){\n<br>\n            mp[num.length()]++;\n<br>\n           }\n<br>\n        }\n<br>\n       int tlength = t.length();\n<br>\n       for(string &amp;num: nums){\n<br>\n        if(isPrefix(num,t)){\n<br>\n            int remlength = tlength - num.length();\n<br>\n            if(mp.find(remlength)!=mp.end()){\n<br>\n                ans+=mp[remlength];\n<br>\n            }\n<br>\n            if(remlength == num.length() &amp;&amp; isSuffix(num,t)){\n<br>\n                ans--;\n<br>\n            }\n<br>\n        }\n<br>\n       }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_18": {
    "body": "﻿\n\n<title>\nNote - more readable\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nmore readable\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int numOfPairs(vector&lt;string&gt;&amp; nums, string t) {\n<br>\n        unordered_map&lt;string,int&gt;mp;\n<br>\n        for(string &amp;num: nums)mp[num]++;\n<br>\n        int tlength = t.length();\n<br>\n        int ans=0;\n<br>\n        for(string &amp;prefix: nums){\n<br>\n            int prefixLength=prefix.length();\n<br>\n            if(t.substr(0,prefixLength)==prefix){\n<br>\n                 string suffix = t.substr(prefixLength);\n<br>\n                 if(mp.find(suffix)!=mp.end()){\n<br>\n                    ans+=mp[suffix];\n<br>\n                 }\n<br>\n                 if(prefix == suffix)ans--;\n<br>\n            }\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_19": {
    "body": "﻿\n\n<title>\nNote - 2006. Count Number of Pairs\nWith Absolute Difference K\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2006. Count Number of Pairs\nWith Absolute Difference K\n</h2>\n<hr>\n<p>\nGiven an integer array nums and an integer k, return the number of pairs (i, j) where i &lt; j such that |nums[i] - nums[j]| == k.\n<br>\n\n<br>\nThe value of |x| is defined as:\n<br>\n\n<br>\nx if x &gt;= 0.\n<br>\n-x if x &lt; 0.\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [1,2,2,1], k = 1\n<br>\nOutput: 4\n<br>\nExplanation: The pairs with an absolute difference of 1 are:\n<br>\n- [1,2,2,1]\n<br>\n- [1,2,2,1]\n<br>\n- [1,2,2,1]\n<br>\n- [1,2,2,1]\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [1,3], k = 3\n<br>\nOutput: 0\n<br>\nExplanation: There are no pairs with an absolute difference of 3.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: nums = [3,2,1,5,4], k = 2\n<br>\nOutput: 3\n<br>\nExplanation: The pairs with an absolute difference of 2 are:\n<br>\n- [3,2,1,5,4]\n<br>\n- [3,2,1,5,4]\n<br>\n- [3,2,1,5,4]\n</p>\n\n\n"
  },
  "note_2": {
    "body": "﻿\n\n<title>\nNote - O(n) hashmap\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) hashmap\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; nums, int target) {\n<br>\n       unordered_map&lt;int,int&gt;mp;\n<br>\n       for(int i=0;i&lt;nums.size();i++){\n<br>\n          int rem = target - nums[i];\n<br>\n          if(mp.find(rem)!=mp.end()){\n<br>\n             return {mp[rem],i};\n<br>\n          }\n<br>\n          mp[nums[i]]=i;\n<br>\n       }\n<br>\n    return {};\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_20": {
    "body": "﻿\n\n<title>\nNote - hashmap\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nhashmap\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int countKDifference(vector&lt;int&gt;&amp; nums, int k) {\n<br>\n       unordered_map&lt;int,int&gt;mp;\n<br>\n       int ans=0;\n<br>\n       for(auto &amp;it: nums){\n<br>\n          int pos = it+k;\n<br>\n          int neg = it-k;\n<br>\n          if(mp.find(pos)!=mp.end())ans+=mp[pos];\n<br>\n          if(mp.find(neg)!=mp.end())ans+=mp[neg];\n<br>\n          mp[it]++;\n<br>\n       }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_21": {
    "body": "﻿\n\n<title>\nNote - 2351. First Letter to Appear Twice\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2351. First Letter to Appear Twice\n</h2>\n<hr>\n<p>\nGiven a string s consisting of lowercase English letters, return the first letter to appear twice.\n<br>\n\n<br>\nNote:\n<br>\n\n<br>\nA letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.\n<br>\ns will contain at least one letter that appears twice.\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"abccbaacz\"\n<br>\nOutput: \"c\"\n<br>\nExplanation:\n<br>\nThe letter 'a' appears on the indexes 0, 5 and 6.\n<br>\nThe letter 'b' appears on the indexes 1 and 4.\n<br>\nThe letter 'c' appears on the indexes 2, 3 and 7.\n<br>\nThe letter 'z' appears on the index 8.\n<br>\nThe letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"abcdd\"\n<br>\nOutput: \"d\"\n<br>\nExplanation:\n<br>\nThe only letter that appears twice is 'd' so we return 'd'.\n</p>\n\n\n"
  },
  "note_22": {
    "body": "﻿\n\n<title>\nNote - O(n) hashmap\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) hashmap\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    char repeatedCharacter(string s) {\n<br>\n        int hash[26]={0};\n<br>\n        int i=0;\n<br>\n        for( i=0;i&lt;s.length();i++){\n<br>\n            hash[s[i]-'a']++;\n<br>\n            if(hash[s[i]-'a']==2)break;\n<br>\n        }\n<br>\n    return s[i];\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_23": {
    "body": "﻿\n\n<title>\nNote - 2824. Count Pairs Whose\nSum is Less than Target\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2824. Count Pairs Whose\nSum is Less than Target\n</h2>\n<hr>\n<p>\nGiven a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 &lt;= i &lt; j &lt; n and nums[i] + nums[j] &lt; target.\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [-1,1,2,3,1], target = 2\n<br>\nOutput: 3\n<br>\nExplanation: There are 3 pairs of indices that satisfy the conditions in the statement:\n<br>\n- (0, 1) since 0 &lt; 1 and nums[0] + nums[1] = 0 &lt; target\n<br>\n- (0, 2) since 0 &lt; 2 and nums[0] + nums[2] = 1 &lt; target \n<br>\n- (0, 4) since 0 &lt; 4 and nums[0] + nums[4] = 0 &lt; target\n<br>\nNote that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [-6,2,5,-2,-7,-1,3], target = -2\n<br>\nOutput: 10\n<br>\nExplanation: There are 10 pairs of indices that satisfy the conditions in the statement:\n<br>\n- (0, 1) since 0 &lt; 1 and nums[0] + nums[1] = -4 &lt; target\n<br>\n- (0, 3) since 0 &lt; 3 and nums[0] + nums[3] = -8 &lt; target\n<br>\n- (0, 4) since 0 &lt; 4 and nums[0] + nums[4] = -13 &lt; target\n<br>\n- (0, 5) since 0 &lt; 5 and nums[0] + nums[5] = -7 &lt; target\n<br>\n- (0, 6) since 0 &lt; 6 and nums[0] + nums[6] = -3 &lt; target\n<br>\n- (1, 4) since 1 &lt; 4 and nums[1] + nums[4] = -5 &lt; target\n<br>\n- (3, 4) since 3 &lt; 4 and nums[3] + nums[4] = -9 &lt; target\n<br>\n- (3, 5) since 3 &lt; 5 and nums[3] + nums[5] = -3 &lt; target\n<br>\n- (4, 5) since 4 &lt; 5 and nums[4] + nums[5] = -8 &lt; target\n<br>\n- (4, 6) since 4 &lt; 6 and nums[4] + nums[6] = -4 &lt; target\n</p>\n\n\n"
  },
  "note_24": {
    "body": "﻿\n\n<title>\nNote - brute O(n^2)\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nbrute O(n^2)\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int countPairs(vector&lt;int&gt;&amp; nums, int target) {\n<br>\n        //brute force approach O(n^2)\n<br>\n        int ans = 0;\n<br>\n        int n=nums.size();\n<br>\n        for(int i=0;i&lt;nums.size();i++){\n<br>\n            for(int j=i+1;j&lt;nums.size();j++){\n<br>\n                if(nums[i]+nums[j]&lt;target)\n<br>\n                    ans++;\n<br>\n            }\n<br>\n        }\n<br>\n      return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_25": {
    "body": "﻿\n\n<title>\nNote - sort  + 2pointer O(nlogn)\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nsort  + 2pointer O(nlogn)\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int countPairs(vector&lt;int&gt;&amp; nums, int target) {\n<br>\n        //brute force approach O(n^2)\n<br>\n        int ans = 0;\n<br>\n        int n=nums.size();\n<br>\n        int i=0,j=n-1;\n<br>\n        sort(nums.begin(),nums.end());\n<br>\n        while(i&lt;j){\n<br>\n          if( nums[i]+nums[j]&lt;target){\n<br>\n             ans+=(j-i);\n<br>\n             i++;\n<br>\n          }\n<br>\n          else{\n<br>\n            j--;\n<br>\n          }\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_26": {
    "body": "﻿\n\n<title>\nNote - 2465. Number of Distinct Averages\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2465. Number of Distinct Averages\n</h2>\n<hr>\n<p>\nYou are given a 0-indexed integer array nums of even length.\n<br>\n\n<br>\nAs long as nums is not empty, you must repetitively:\n<br>\n\n<br>\nFind the minimum number in nums and remove it.\n<br>\nFind the maximum number in nums and remove it.\n<br>\nCalculate the average of the two removed numbers.\n<br>\nThe average of two numbers a and b is (a + b) / 2.\n<br>\n\n<br>\nFor example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.\n<br>\nReturn the number of distinct averages calculated using the above process.\n<br>\n\n<br>\nNote that when there is a tie for a minimum or maximum number, any can be removed.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [4,1,4,0,3,5]\n<br>\nOutput: 2\n<br>\nExplanation:\n<br>\n1. Remove 0 and 5, and the average is (0 + 5) / 2 = 2.5. Now, nums = [4,1,4,3].\n<br>\n2. Remove 1 and 4. The average is (1 + 4) / 2 = 2.5, and nums = [4,3].\n<br>\n3. Remove 3 and 4, and the average is (3 + 4) / 2 = 3.5.\n<br>\nSince there are 2 distinct numbers among 2.5, 2.5, and 3.5, we return 2.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [1,100]\n<br>\nOutput: 1\n<br>\nExplanation:\n<br>\nThere is only one average to be calculated after removing 1 and 100, so we return 1.\n</p>\n\n\n"
  },
  "note_27": {
    "body": "﻿\n\n<title>\nNote - sort + 2 pointer O(n)\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nsort + 2 pointer O(n)\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int distinctAverages(vector&lt;int&gt;&amp; nums) {\n<br>\n        sort(nums.begin(),nums.end());\n<br>\n        int n=nums.size();\n<br>\n        int hash[202]={0};\n<br>\n        int i=0,j=n-1,ans=0;\n<br>\n        while(i&lt;j){\n<br>\n            int sum = nums[i++]+nums[j--];\n<br>\n            hash[sum]++;\n<br>\n        }\n<br>\n        for(int &amp;it: hash){\n<br>\n            if(it&gt;0)ans++;\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_28": {
    "body": "﻿\n\n<title>\nNote - 2441. Largest Positive Integer That\nExists With Its Negative\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2441. Largest Positive Integer That\nExists With Its Negative\n</h2>\n<hr>\n<p>\nGiven an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.\n<br>\n\n<br>\nReturn the positive integer k. If there is no such integer, return -1.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [-1,2,-3,3]\n<br>\nOutput: 3\n<br>\nExplanation: 3 is the only valid k we can find in the array.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [-1,10,6,7,-7,1]\n<br>\nOutput: 7\n<br>\nExplanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: nums = [-10,8,6,7,-2,-3]\n<br>\nOutput: -1\n<br>\nExplanation: There is no a single valid k, we return -1.\n</p>\n\n\n"
  },
  "note_29": {
    "body": "﻿\n\n<title>\nNote - hashmap\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nhashmap\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int findMaxK(vector&lt;int&gt;&amp; nums) {\n<br>\n        vector&lt;bool&gt;hash(2001,false);\n<br>\n        int ans=-1;\n<br>\n        for(int &amp;it: nums){\n<br>\n            if(hash[1000-it] &amp;&amp; ans&lt;abs(it)){\n<br>\n              ans=abs(it);\n<br>\n            }\n<br>\n            hash[it+1000]=true;\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_3": {
    "body": "﻿\n\n<title>\nNote - brute\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nbrute\n</h2>\n<hr>\n<p>\nvector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; nums, int target) {\n<br>\n        int n=nums.size();\n<br>\n       for(int i=0;i&lt;n;i++){\n<br>\n        for(int j=i+1;j&lt;n;j++){\n<br>\n            if(nums[i]+nums[j]==target)\n<br>\n              return {i,j};\n<br>\n        }\n<br>\n       }\n<br>\n    return {};\n<br>\n    }\n</p>\n\n\n"
  },
  "note_30": {
    "body": "﻿\n\n<title>\nNote - sort + 2pointer\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nsort + 2pointer\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int findMaxK(vector&lt;int&gt;&amp; nums) {\n<br>\n        sort(nums.begin(),nums.end());\n<br>\n        int i=0,j=nums.size()-1;\n<br>\n        while(i&lt;j){\n<br>\n            int sum = nums[i]+nums[j];\n<br>\n            if(sum==0)return nums[j];\n<br>\n            else if(sum&lt;0)i++;\n<br>\n            else j--;\n<br>\n        }\n<br>\n    return -1;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_31": {
    "body": "﻿\n\n<title>\nNote - 2395. Find Subarrays\nWith Equal Sum\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2395. Find Subarrays\nWith Equal Sum\n</h2>\n<hr>\n<p>\nGiven a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.\n<br>\n\n<br>\nReturn true if these subarrays exist, and false otherwise.\n<br>\n\n<br>\nA subarray is a contiguous non-empty sequence of elements within an array.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [4,2,4]\n<br>\nOutput: true\n<br>\nExplanation: The subarrays with elements [4,2] and [2,4] have the same sum of 6.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [1,2,3,4,5]\n<br>\nOutput: false\n<br>\nExplanation: No two subarrays of size 2 have the same sum.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: nums = [0,0,0]\n<br>\nOutput: true\n<br>\nExplanation: The subarrays [nums[0],nums[1]] and [nums[1],nums[2]] have the same sum of 0. \n<br>\nNote that even though the subarrays have the same content, the two subarrays are considered different because they are in different positions in the original array.\n</p>\n\n\n"
  },
  "note_32": {
    "body": "﻿\n\n<title>\nNote - hashmap\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nhashmap\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool findSubarrays(vector&lt;int&gt;&amp; nums) {\n<br>\n        unordered_map&lt;int,int&gt;mp;\n<br>\n        int n=nums.size();\n<br>\n        for(int i=1;i&lt;n;i++)\n<br>\n            mp[nums[i]+nums[i-1]]=i-1;\n<br>\n        \n<br>\n        for(int j=n-2;j&gt;=0;j--){\n<br>\n           int sum = nums[j]+nums[j+1];\n<br>\n           if(mp.find(sum)!=mp.end() &amp;&amp; j!=mp[sum])return true;\n<br>\n        }\n<br>\n    return false;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_33": {
    "body": "﻿\n\n<title>\nNote - set O(n)\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nset O(n)\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool findSubarrays(vector&lt;int&gt;&amp; nums) {\n<br>\n        unordered_set&lt;int&gt;st;\n<br>\n        int n=nums.size();\n<br>\n        for(int i=1;i&lt;n;i++){\n<br>\n            if(st.count(nums[i]+nums[i-1]))return true;\n<br>\n            st.insert(nums[i]+nums[i-1]);\n<br>\n        }\n<br>\n    return false;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_34": {
    "body": "﻿\n\n<title>\nNote - 2399. Check Distances\nBetween Same Letters\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2399. Check Distances\nBetween Same Letters\n</h2>\n<hr>\n<p>\nYou are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. You are also given a 0-indexed integer array distance of length 26.\n<br>\n\n<br>\nEach letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -&gt; 0, 'b' -&gt; 1, 'c' -&gt; 2, ... , 'z' -&gt; 25).\n<br>\n\n<br>\nIn a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. If the ith letter does not appear in s, then distance[i] can be ignored.\n<br>\n\n<br>\nReturn true if s is a well-spaced string, otherwise return false.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"abaccb\", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n<br>\nOutput: true\n<br>\nExplanation:\n<br>\n- 'a' appears at indices 0 and 2 so it satisfies distance[0] = 1.\n<br>\n- 'b' appears at indices 1 and 5 so it satisfies distance[1] = 3.\n<br>\n- 'c' appears at indices 3 and 4 so it satisfies distance[2] = 0.\n<br>\nNote that distance[3] = 5, but since 'd' does not appear in s, it can be ignored.\n<br>\nReturn true because s is a well-spaced string.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"aa\", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n<br>\nOutput: false\n<br>\nExplanation:\n<br>\n- 'a' appears at indices 0 and 1 so there are zero letters between them.\n<br>\nBecause distance[0] = 1, s is not a well-spaced string.\n</p>\n\n\n"
  },
  "note_35": {
    "body": "﻿\n\n<title>\nNote - hash O(n)\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nhash O(n)\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool checkDistances(string s, vector&lt;int&gt;&amp; distance) {\n<br>\n        vector&lt;int&gt;hash(26,-1);\n<br>\n        for(int i=0;i&lt;s.length();i++){\n<br>\n            int idx = s[i]-'a';\n<br>\n            if(hash[idx]!=-1 &amp;&amp;  (i-hash[idx]-1)!=distance[idx])return false;\n<br>\n            hash[idx]=i;\n<br>\n        }\n<br>\n    return true;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_36": {
    "body": "﻿\n\n<title>\nNote - hash lookup\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nhash lookup\n</h2>\n<hr>\n<p>\nHave it's own pattern question \n<br>\n\n<br>\nclass Solution {\n<br>\npublic:\n<br>\n    bool checkDistances(string s, vector&lt;int&gt;&amp; dist) {\n<br>\n        int n=s.length();\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n           int d = dist[s[i]-'a'];\n<br>\n           if(i+d+1 &gt;= n || s[i+d+1]!=s[i])return false;\n<br>\n          dist[s[i]-'a']=-1;\n<br>\n        }\n<br>\n    return true;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_37": {
    "body": "﻿\n\n<title>\nNote - 2354. Number of Excellent Pairs\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2354. Number of Excellent Pairs\n</h2>\n<hr>\n<p>\nYou are given a 0-indexed positive integer array nums and a positive integer k.\n<br>\n\n<br>\nA pair of numbers (num1, num2) is called excellent if the following conditions are satisfied:\n<br>\n\n<br>\nBoth the numbers num1 and num2 exist in the array nums.\n<br>\nThe sum of the number of set bits in num1 OR num2 and num1 AND num2 is greater than or equal to k, where OR is the bitwise OR operation and AND is the bitwise AND operation.\n<br>\nReturn the number of distinct excellent pairs.\n<br>\n\n<br>\nTwo pairs (a, b) and (c, d) are considered distinct if either a != c or b != d. For example, (1, 2) and (2, 1) are distinct.\n<br>\n\n<br>\nNote that a pair (num1, num2) such that num1 == num2 can also be excellent if you have at least one occurrence of num1 in the array.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [1,2,3,1], k = 3\n<br>\nOutput: 5\n<br>\nExplanation: The excellent pairs are the following:\n<br>\n- (3, 3). (3 AND 3) and (3 OR 3) are both equal to (11) in binary. The total number of set bits is 2 + 2 = 4, which is greater than or equal to k = 3.\n<br>\n- (2, 3) and (3, 2). (2 AND 3) is equal to (10) in binary, and (2 OR 3) is equal to (11) in binary. The total number of set bits is 1 + 2 = 3.\n<br>\n- (1, 3) and (3, 1). (1 AND 3) is equal to (01) in binary, and (1 OR 3) is equal to (11) in binary. The total number of set bits is 1 + 2 = 3.\n<br>\nSo the number of excellent pairs is 5.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [5,1,1], k = 10\n<br>\nOutput: 0\n<br>\nExplanation: There are no excellent pairs for this array.\n</p>\n\n\n"
  },
  "note_38": {
    "body": "﻿\n\n<title>\nNote - hash\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nhash\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int countBit(int x){\n<br>\n        int cnt=0;\n<br>\n        while(x&gt;0){\n<br>\n            cnt+=x&amp;1;\n<br>\n            x=x&gt;&gt;1;\n<br>\n        }\n<br>\n    return cnt;\n<br>\n    }\n<br>\n    long long countExcellentPairs(vector&lt;int&gt;&amp; nums, int k) {\n<br>\n        unordered_set&lt;int&gt;ust(nums.begin(),nums.end());\n<br>\n        vector&lt;int&gt;bitCnt(32,0);\n<br>\n        long long ans=0;\n<br>\n        for(auto &amp;it: ust)\n<br>\n            bitCnt[countBit(it)]++;\n<br>\n        for(int i=0;i&lt;32;i++){\n<br>\n            for(int j=0;j&lt;32;j++){\n<br>\n                if(i+j&gt;=k)\n<br>\n                ans+=(long long)bitCnt[i]*bitCnt[j];\n<br>\n            }\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_39": {
    "body": "﻿\n\n<title>\nNote - Insight\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nInsight\n</h2>\n<hr>\n<p>\ncountBits(xORy)+countBits(xANDy)=countBits(x)+countBits(y)\n</p>\n\n\n"
  },
  "note_4": {
    "body": "﻿\n\n<title>\nNote - 15. 3Sum\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n15. 3Sum\n</h2>\n<hr>\n<p>\n15. 3Sum\n<br>\nGiven an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\n<br>\n\n<br>\nNotice that the solution set must not contain duplicate triplets.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [-1,0,1,2,-1,-4]\n<br>\nOutput: [[-1,-1,2],[-1,0,1]]\n<br>\nExplanation: \n<br>\nnums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.\n<br>\nnums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\n<br>\nnums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\n<br>\nThe distinct triplets are [-1,0,1] and [-1,-1,2].\n<br>\nNotice that the order of the output and the order of the triplets does not matter.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [0,1,1]\n<br>\nOutput: []\n<br>\nExplanation: The only possible triplet does not sum up to 0.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: nums = [0,0,0]\n<br>\nOutput: [[0,0,0]]\n<br>\nExplanation: The only possible triplet sums up to 0.\n</p>\n\n\n"
  },
  "note_5": {
    "body": "﻿\n\n<title>\nNote - sorting + 2 pointer\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nsorting + 2 pointer\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    vector&lt;vector&lt;int&gt;&gt; threeSum(vector&lt;int&gt;&amp; nums) {\n<br>\n        //sorting solution\n<br>\n        sort(nums.begin(),nums.end());\n<br>\n        int n=nums.size();\n<br>\n        vector&lt;vector&lt;int&gt;&gt;ans;\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n            int tar = -nums[i];\n<br>\n            int front = i+1;\n<br>\n            int back = n-1;\n<br>\n            while(front &lt; back){\n<br>\n                int sum = nums[front]+nums[back];\n<br>\n                if(sum&gt;tar)\n<br>\n                    back--;\n<br>\n                else if(sum&lt;tar)\n<br>\n                    front++;\n<br>\n                else{\n<br>\n                    vector&lt;int&gt;sub({nums[i],nums[front],nums[back]});\n<br>\n                    ans.push_back(sub);\n<br>\n                    while(front&lt;back &amp;&amp; nums[front]==sub[1])front++;\n<br>\n                    while(front&lt;back &amp;&amp; nums[back]==sub[2])back--;\n<br>\n                }\n<br>\n            }\n<br>\n            while(i&lt;n &amp;&amp; nums[i]==nums[i+1])i++;\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_6": {
    "body": "﻿\n\n<title>\nNote - sorting + hashmap\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nsorting + hashmap\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    vector&lt;vector&lt;int&gt;&gt; threeSum(vector&lt;int&gt;&amp; nums) {\n<br>\n        int n=nums.size();\n<br>\n        vector&lt;vector&lt;int&gt;&gt;ans;\n<br>\n        sort(nums.begin(),nums.end());\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n            if(i&gt;0 &amp;&amp; nums[i]==nums[i-1])continue;\n<br>\n            int tar = -nums[i];\n<br>\n            unordered_map&lt;int,int&gt;seen;\n<br>\n            for(int j=i+1;j&lt;n;j++){\n<br>\n                int rem = tar - nums[j];\n<br>\n                if(seen.find(rem)!=seen.end()){\n<br>\n                    ans.push_back({nums[i],nums[j],rem});\n<br>\n                    while(j+1&lt;n &amp;&amp; nums[j]==nums[j+1])j++;\n<br>\n                }\n<br>\n                seen[nums[j]]=j;\n<br>\n            }\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_7": {
    "body": "﻿\n\n<title>\nNote - O(n) 2 pointer\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) 2 pointer\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; nums, int tar) {\n<br>\n        int n = nums.size();\n<br>\n        int i = 0, j = n - 1;\n<br>\n        while (i &lt; j) {\n<br>\n            int sum = nums[i] + nums[j];\n<br>\n            if (sum &gt; tar)\n<br>\n                j--;\n<br>\n            else if (sum &lt; tar)\n<br>\n                i++;\n<br>\n            else {\n<br>\n\n<br>\n                return {i + 1, j + 1};\n<br>\n            }\n<br>\n        }\n<br>\n        return {};\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_8": {
    "body": "﻿\n\n<title>\nNote - 560. Subarray Sum Equals K\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n560. Subarray Sum Equals K\n</h2>\n<hr>\n<p>\nGiven an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.\n<br>\n\n<br>\nA subarray is a contiguous non-empty sequence of elements within an array.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: nums = [1,1,1], k = 2\n<br>\nOutput: 2\n<br>\nExample 2:\n<br>\n\n<br>\nInput: nums = [1,2,3], k = 3\n<br>\nOutput: 2\n</p>\n\n\n"
  },
  "note_9": {
    "body": "﻿\n\n<title>\nNote - O(n) hashmap + prefix sum\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nO(n) hashmap + prefix sum\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int subarraySum(vector&lt;int&gt;&amp; nums, int k) {\n<br>\n        unordered_map&lt;int,int&gt;mp;\n<br>\n        mp[0]=1;\n<br>\n        int prefix=0,ans=0;\n<br>\n        for(int &amp;it: nums){\n<br>\n            prefix+=it;\n<br>\n            if(mp.find(prefix-k)!=mp.end())ans+=mp[prefix-k];\n<br>\n            mp[prefix]++;\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  }
}

 export const coordsData = [
  {
    "coords": "973,86,989,102",
    "noteKey": "note_1"
  },
  {
    "coords": "1147,66,1163,82",
    "noteKey": "note_2"
  },
  {
    "coords": "1094,111,1110,127",
    "noteKey": "note_3"
  },
  {
    "coords": "954,201,970,217",
    "noteKey": "note_4"
  },
  {
    "coords": "1152,181,1168,197",
    "noteKey": "note_5"
  },
  {
    "coords": "1154,226,1170,242",
    "noteKey": "note_6"
  },
  {
    "coords": "1217,305,1233,321",
    "noteKey": "note_7"
  },
  {
    "coords": "1103,381,1119,397",
    "noteKey": "note_8"
  },
  {
    "coords": "1353,383,1369,399",
    "noteKey": "note_9"
  },
  {
    "coords": "1142,450,1158,466",
    "noteKey": "note_10"
  },
  {
    "coords": "1338,452,1354,468",
    "noteKey": "note_11"
  },
  {
    "coords": "1069,519,1085,535",
    "noteKey": "note_12"
  },
  {
    "coords": "1214,521,1230,537",
    "noteKey": "note_13"
  },
  {
    "coords": "1067,587,1083,603",
    "noteKey": "note_14"
  },
  {
    "coords": "1252,599,1268,615",
    "noteKey": "note_15"
  },
  {
    "coords": "1164,689,1180,705",
    "noteKey": "note_16"
  },
  {
    "coords": "1406,678,1422,694",
    "noteKey": "note_17"
  },
  {
    "coords": "1342,723,1358,739",
    "noteKey": "note_18"
  },
  {
    "coords": "508,26,524,42",
    "noteKey": "note_19"
  },
  {
    "coords": "203,38,219,54",
    "noteKey": "note_20"
  },
  {
    "coords": "513,114,529,130",
    "noteKey": "note_21"
  },
  {
    "coords": "168,116,184,132",
    "noteKey": "note_22"
  },
  {
    "coords": "508,196,524,212",
    "noteKey": "note_23"
  },
  {
    "coords": "230,186,246,202",
    "noteKey": "note_24"
  },
  {
    "coords": "230,230,246,246",
    "noteKey": "note_25"
  },
  {
    "coords": "513,298,529,314",
    "noteKey": "note_26"
  },
  {
    "coords": "159,300,175,316",
    "noteKey": "note_27"
  },
  {
    "coords": "508,380,524,396",
    "noteKey": "note_28"
  },
  {
    "coords": "158,370,174,386",
    "noteKey": "note_29"
  },
  {
    "coords": "158,414,174,430",
    "noteKey": "note_30"
  },
  {
    "coords": "508,496,524,512",
    "noteKey": "note_31"
  },
  {
    "coords": "260,485,276,501",
    "noteKey": "note_32"
  },
  {
    "coords": "260,529,276,545",
    "noteKey": "note_33"
  },
  {
    "coords": "508,611,524,627",
    "noteKey": "note_34"
  },
  {
    "coords": "248,600,264,616",
    "noteKey": "note_35"
  },
  {
    "coords": "248,645,264,661",
    "noteKey": "note_36"
  },
  {
    "coords": "513,735,529,751",
    "noteKey": "note_37"
  },
  {
    "coords": "180,715,196,731",
    "noteKey": "note_38"
  },
  {
    "coords": "180,760,196,776",
    "noteKey": "note_39"
  }
]