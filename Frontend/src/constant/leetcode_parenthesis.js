export const notesData = {
  "note_1": {
    "body": "﻿\n\n<title>\nNote - 678. Valid Parenthesis\nString (*))\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n678. Valid Parenthesis\nString (*))\n</h2>\n<hr>\n<p>\nGiven a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.\n<br>\n\n<br>\nThe following rules define a valid string:\n<br>\n\n<br>\nAny left parenthesis '(' must have a corresponding right parenthesis ')'.\n<br>\nAny right parenthesis ')' must have a corresponding left parenthesis '('.\n<br>\nLeft parenthesis '(' must go before the corresponding right parenthesis ')'.\n<br>\n'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string \"\".\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"()\"\n<br>\nOutput: true\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"(*)\"\n<br>\nOutput: true\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"(*))\"\n<br>\nOutput: true\n</p>\n\n\n"
  },
  "note_10": {
    "body": "﻿\n\n<title>\nNote - Brute Recursive \n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nBrute Recursive \n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n   void helper(vector&lt;string&gt;&amp;ans,int open,int close,string s){\n<br>\n      if(open==0 &amp;&amp; close==0){\n<br>\n        ans.push_back(s);\n<br>\n        return;\n<br>\n      }\n<br>\n      if(open&gt;0)\n<br>\n      helper(ans,open-1,close,s+\"(\");\n<br>\n      if(open&lt;close)\n<br>\n      helper(ans,open,close-1,s+\")\");\n<br>\n    return;\n<br>\n   }\n<br>\n    vector&lt;string&gt; generateParenthesis(int n) {\n<br>\n        vector&lt;string&gt;ans;\n<br>\n         helper(ans,n,n,\"\");\n<br>\n         return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_11": {
    "body": "﻿\n\n<title>\nNote - little Better\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nlittle Better\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    void helper(vector&lt;string&gt;&amp; ans, int open, int close, string&amp; s) {\n<br>\n        if (open == 0 &amp;&amp; close == 0) {\n<br>\n            ans.push_back(s);\n<br>\n            return;\n<br>\n        }\n<br>\n        if (open &gt; 0) {\n<br>\n            s.push_back('(');\n<br>\n            helper(ans, open - 1, close, s);\n<br>\n            s.pop_back();\n<br>\n        }\n<br>\n        if (open &lt; close) {\n<br>\n            s.push_back(')');\n<br>\n            helper(ans, open, close - 1, s);\n<br>\n            s.pop_back();\n<br>\n        }\n<br>\n        return;\n<br>\n    }\n<br>\n    vector&lt;string&gt; generateParenthesis(int n) {\n<br>\n        vector&lt;string&gt; ans;\n<br>\n        string s;\n<br>\n        helper(ans, n, n, s);\n<br>\n        return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_12": {
    "body": "﻿\n\n<title>\nNote - 32. Longest Valid Parentheses\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n32. Longest Valid Parentheses\n</h2>\n<hr>\n<p>\nGiven a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses \n<br>\nsubstring\n<br>\n.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"(()\"\n<br>\nOutput: 2\n<br>\nExplanation: The longest valid parentheses substring is \"()\".\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \")()())\"\n<br>\nOutput: 4\n<br>\nExplanation: The longest valid parentheses substring is \"()()\".\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"\"\n<br>\nOutput: 0\n</p>\n\n\n"
  },
  "note_13": {
    "body": "﻿\n\n<title>\nNote - stack\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nstack\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int longestValidParentheses(string s) {\n<br>\n        stack&lt;int&gt;st;\n<br>\n        st.push(-1);\n<br>\n        int ans=0;\n<br>\n        for(int i=0;i&lt;s.length();i++){\n<br>\n            if(s[i]=='(')st.push(i);\n<br>\n            else{\n<br>\n                st.pop();\n<br>\n                if(!st.empty())ans=max(ans,i-st.top());\n<br>\n                else st.push(i);\n<br>\n            }\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_14": {
    "body": "﻿\n\n<title>\nNote - 2 Pass\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2 Pass\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int longestValidParentheses(string s) {\n<br>\n        int open=0,close=0,ans=0;\n<br>\n        for(int i=0;i&lt;s.length();i++){\n<br>\n            if(s[i]=='(')open++;\n<br>\n            else close++;\n<br>\n\n<br>\n            if(open==close)ans=max(ans,2*open);\n<br>\n            else if(close&gt;open)open=close=0;\n<br>\n        }\n<br>\n        open=close=0;\n<br>\n        for(int i=s.length()-1;i&gt;=0;i--){\n<br>\n            if(s[i]=='(')open++;\n<br>\n            else close++;\n<br>\n\n<br>\n            if(open==close)ans=max(ans,2*open);\n<br>\n            else if(close&lt;open)open=close=0;\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_15": {
    "body": "﻿\n\n<title>\nNote - 2337. Move Pieces to\nObtain a String\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2337. Move Pieces to\nObtain a String\n</h2>\n<hr>\n<p>\nYou are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where:\n<br>\n\n<br>\nThe characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, and a piece 'R' can move to the right only if there is a blank space directly to its right.\n<br>\nThe character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.\n<br>\nReturn true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: start = \"_L__R__R_\", target = \"L______RR\"\n<br>\nOutput: true\n<br>\nExplanation: We can obtain the string target from start by doing the following moves:\n<br>\n- Move the first piece one step to the left, start becomes equal to \"L___R__R_\".\n<br>\n- Move the last piece one step to the right, start becomes equal to \"L___R___R\".\n<br>\n- Move the second piece three steps to the right, start becomes equal to \"L______RR\".\n<br>\nSince it is possible to get the string target from start, we return true.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: start = \"R_L_\", target = \"__LR\"\n<br>\nOutput: false\n<br>\nExplanation: The 'R' piece in the string start can move one step to the right to obtain \"_RL_\".\n<br>\nAfter that, no pieces can move anymore, so it is impossible to obtain the string target from start.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: start = \"_R\", target = \"R_\"\n<br>\nOutput: false\n<br>\nExplanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.\n</p>\n\n\n"
  },
  "note_16": {
    "body": "﻿\n\n<title>\nNote - optimal\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\noptimal\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool canChange(string s, string t) {\n<br>\n        int si=0,ti=0;\n<br>\n        if(s.length()!=t.length())return false;\n<br>\n        int n=s.length();\n<br>\n        while(si&lt;n &amp;&amp; ti&lt;n){\n<br>\n            while(si&lt;n &amp;&amp; s[si]=='_')si++;\n<br>\n            while(ti&lt;n &amp;&amp; t[ti]=='_')ti++;\n<br>\n            if(si==ti &amp;&amp; si==n &amp;&amp; ti==n)return true;\n<br>\n            if(si==n || ti==n || s[si]!=t[ti])return false;\n<br>\n            if(s[si]=='L' &amp;&amp; ti&gt;si)return false;\n<br>\n            else if(s[si]=='R' &amp;&amp; si&gt;ti)return false;\n<br>\n\n<br>\n            si++;\n<br>\n            ti++;\n<br>\n        }\n<br>\n        while(si&lt;n &amp;&amp; s[si]=='_')si++;\n<br>\n        while(ti&lt;n &amp;&amp; t[ti]=='_')ti++;\n<br>\n    return si==ti;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_17": {
    "body": "﻿\n\n<title>\nNote - 777. Swap Adjacent in LR String\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n777. Swap Adjacent in LR String\n</h2>\n<hr>\n<p>\nIn a string composed of 'L', 'R', and 'X' characters, like \"RXXLRXRXL\", a move consists of either replacing one occurrence of \"XL\" with \"LX\", or replacing one occurrence of \"RX\" with \"XR\". Given the starting string start and the ending string result, return True if and only if there exists a sequence of moves to transform start to result.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: start = \"RXXLRXRXL\", result = \"XRLXXRRLX\"\n<br>\nOutput: true\n<br>\nExplanation: We can transform start to result following these steps:\n<br>\nRXXLRXRXL -&gt;\n<br>\nXRXLRXRXL -&gt;\n<br>\nXRLXRXRXL -&gt;\n<br>\nXRLXXRRXL -&gt;\n<br>\nXRLXXRRLX\n<br>\nExample 2:\n<br>\n\n<br>\nInput: start = \"X\", result = \"L\"\n<br>\nOutput: false\n<br>\n \n<br>\n\n<br>\nConstraints:\n<br>\n\n<br>\n1 &lt;= start.length &lt;= 104\n<br>\nstart.length == result.length\n<br>\nBoth start and result will only consist of characters in 'L', 'R', and 'X'.\n</p>\n\n\n"
  },
  "note_18": {
    "body": "﻿\n\n<title>\nNote - 1003. Check If Word Is Valid\nAfter Substitutions\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1003. Check If Word Is Valid\nAfter Substitutions\n</h2>\n<hr>\n<p>\nGiven a string s, determine if it is valid.\n<br>\n\n<br>\nA string s is valid if, starting with an empty string t = \"\", you can transform t into s after performing the following operation any number of times:\n<br>\n\n<br>\nInsert string \"abc\" into any position in t. More formally, t becomes tleft + \"abc\" + tright, where t == tleft + tright. Note that tleft and tright may be empty.\n<br>\nReturn true if s is a valid string, otherwise, return false.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"aabcbc\"\n<br>\nOutput: true\n<br>\nExplanation:\n<br>\n\"\" -&gt; \"abc\" -&gt; \"aabcbc\"\n<br>\nThus, \"aabcbc\" is valid.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"abcabcababcc\"\n<br>\nOutput: true\n<br>\nExplanation:\n<br>\n\"\" -&gt; \"abc\" -&gt; \"abcabc\" -&gt; \"abcabcabc\" -&gt; \"abcabcababcc\"\n<br>\nThus, \"abcabcababcc\" is valid.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"abccba\"\n<br>\nOutput: false\n<br>\nExplanation: It is impossible to get \"abccba\" using the operation.\n</p>\n\n\n"
  },
  "note_19": {
    "body": "﻿\n\n<title>\nNote - stack\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nstack\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool isValid(string s) {\n<br>\n        stack&lt;char&gt;st;\n<br>\n        for(char &amp;c: s){\n<br>\n            st.push(c);\n<br>\n            if(st.size()&gt;=3){\n<br>\n               char third=st.top();st.pop();\n<br>\n               char second=st.top();st.pop();\n<br>\n               char first=st.top();st.pop();\n<br>\n         \n<br>\n               if(first!='a' || second!='b' || third!='c'){\n<br>\n                st.push(first);\n<br>\n                st.push(second);\n<br>\n                st.push(third);\n<br>\n               }\n<br>\n            }\n<br>\n        }\n<br>\n    return st.empty();\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_2": {
    "body": "﻿\n\n<title>\nNote - 2 Pass\n O(n) &amp; O(1)\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2 Pass\n O(n) &amp; O(1)\n</h2>\n<hr>\n<p>\n// Optimized Approach\n<br>\n// Time complexity -&gt; O(2n) ~ O(n) and Space -&gt; O(1)\n<br>\nclass Solution {\n<br>\npublic:\n<br>\n    bool checkValidString(string s) {\n<br>\n        int open=0; //For keeping count in Left to right travers\n<br>\n        int close=0; //For keeping count in Right to left travers\n<br>\n        int n=s.length();\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n            if(s[i]=='(' || s[i]=='*'){\n<br>\n                open++;\n<br>\n            }else{\n<br>\n                open--;\n<br>\n            }\n<br>\n            if(open&lt;0){\n<br>\n                return false;\n<br>\n            }\n<br>\n        }\n<br>\n        for(int i=n-1;i&gt;=0;i--){\n<br>\n            if(s[i]==')' || s[i]=='*'){\n<br>\n                close++;\n<br>\n            }else{\n<br>\n                close--;\n<br>\n            }\n<br>\n            if(close&lt;0){\n<br>\n                return false;\n<br>\n            }\n<br>\n        }\n<br>\n        return true;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_20": {
    "body": "﻿\n\n<title>\nNote - 2267. Check if There Is a Valid\nParentheses String Path\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2267. Check if There Is a Valid\nParentheses String Path\n</h2>\n<hr>\n<p>\nA parentheses string is a non-empty string consisting only of '(' and ')'. It is valid if any of the following conditions is true:\n<br>\n\n<br>\nIt is ().\n<br>\nIt can be written as AB (A concatenated with B), where A and B are valid parentheses strings.\n<br>\nIt can be written as (A), where A is a valid parentheses string.\n<br>\nYou are given an m x n matrix of parentheses grid. A valid parentheses string path in the grid is a path satisfying all of the following conditions:\n<br>\n\n<br>\nThe path starts from the upper left cell (0, 0).\n<br>\nThe path ends at the bottom-right cell (m - 1, n - 1).\n<br>\nThe path only ever moves down or right.\n<br>\nThe resulting parentheses string formed by the path is valid.\n<br>\nReturn true if there exists a valid parentheses string path in the grid. Otherwise, return false.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: grid = [[\"(\",\"(\",\"(\"],[\")\",\"(\",\")\"],[\"(\",\"(\",\")\"],[\"(\",\"(\",\")\"]]\n<br>\nOutput: true\n<br>\nExplanation: The above diagram shows two possible paths that form valid parentheses strings.\n<br>\nThe first path shown results in the valid parentheses string \"()(())\".\n<br>\nThe second path shown results in the valid parentheses string \"((()))\".\n<br>\nNote that there may be other valid parentheses string paths.\n<br>\nExample 2:\n<br>\n\n<br>\n\n<br>\nInput: grid = [[\")\",\")\"],[\"(\",\"(\"]]\n<br>\nOutput: false\n<br>\nExplanation: The two possible paths form the parentheses strings \"))(\" and \")((\". Since neither of them are valid parentheses strings, we return false.\n</p>\n\n\n"
  },
  "note_21": {
    "body": "﻿\n\n<title>\nNote - Recursion\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nRecursion\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool checkValid(string &amp;s){\n<br>\n        int open=0,close=0,n=s.length();\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n            if(s[i]=='(')open++;\n<br>\n            else open--;\n<br>\n            if(s[n-i-1]==')')close++;\n<br>\n            else close--;\n<br>\n            if(open&lt;0 || close&lt;0)return false;\n<br>\n        }\n<br>\n    return true;\n<br>\n    }\n<br>\n    bool helper(vector&lt;vector&lt;char&gt;&gt;&amp;grid,int i,int j,int n,int m,string &amp;s){\n<br>\n        if(i&lt;0 || j&lt;0 || i&gt;=n || j&gt;=m)return false;\n<br>\n        s.push_back(grid[i][j]);\n<br>\n        if(i==n-1 &amp;&amp; j==m-1){\n<br>\n            bool check = checkValid(s);\n<br>\n            s.pop_back();\n<br>\n        return check;\n<br>\n        }\n<br>\n        bool down = helper(grid,i+1,j,n,m,s);\n<br>\n        bool left = helper(grid,i,j+1,n,m,s);\n<br>\n        s.pop_back();\n<br>\n\n<br>\n    return down || left;\n<br>\n    }\n<br>\n    bool hasValidPath(vector&lt;vector&lt;char&gt;&gt;&amp; grid) {\n<br>\n        string s;\n<br>\n        return helper(grid,0,0,grid.size(),grid[0].size(),s);\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_22": {
    "body": "﻿\n\n<title>\nNote - Memoisation\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nMemoisation\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\n    private:\n<br>\n      int n,m;\n<br>\n      unordered_map&lt;string,bool&gt;memo;\n<br>\npublic:\n<br>\n    bool helper(vector&lt;vector&lt;char&gt;&gt;&amp;grid,int i,int j,int open){\n<br>\n        if(i&lt;0 || j&lt;0 || i&gt;=n || j&gt;=m)return false;\n<br>\n        open += (grid[i][j]=='(')?1:-1;\n<br>\n        if(open&lt;0)return false;\n<br>\n        if(i==n-1 &amp;&amp; j==m-1)return open==0;\n<br>\n        string key = to_string(i)+\",\"+to_string(j)+\",\"+to_string(open);\n<br>\n        if(memo.find(key)!=memo.end())return memo[key];\n<br>\n        bool down = helper(grid,i+1,j,open);\n<br>\n        bool left = helper(grid,i,j+1,open);\n<br>\n     \n<br>\n    return memo[key]=down || left;\n<br>\n    }\n<br>\n    bool hasValidPath(vector&lt;vector&lt;char&gt;&gt;&amp; grid) {\n<br>\n      \n<br>\n        n=grid.size();\n<br>\n        m=grid[0].size();\n<br>\n        return helper(grid,0,0,0);\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_23": {
    "body": "﻿\n\n<title>\nNote - 1249. Minimum Remove to\nMake Valid Parentheses\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1249. Minimum Remove to\nMake Valid Parentheses\n</h2>\n<hr>\n<p>\nGiven a string s of '(' , ')' and lowercase English characters.\n<br>\n\n<br>\nYour task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.\n<br>\n\n<br>\nFormally, a parentheses string is valid if and only if:\n<br>\n\n<br>\nIt is the empty string, contains only lowercase characters, or\n<br>\nIt can be written as AB (A concatenated with B), where A and B are valid strings, or\n<br>\nIt can be written as (A), where A is a valid string.\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"lee(t(c)o)de)\"\n<br>\nOutput: \"lee(t(c)o)de\"\n<br>\nExplanation: \"lee(t(co)de)\" , \"lee(t(c)ode)\" would also be accepted.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"a)b(c)d\"\n<br>\nOutput: \"ab(c)d\"\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"))((\"\n<br>\nOutput: \"\"\n<br>\nExplanation: An empty string is also valid.\n</p>\n\n\n"
  },
  "note_24": {
    "body": "﻿\n\n<title>\nNote - optimal\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\noptimal\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    string minRemoveToMakeValid(string s) {\n<br>\n        //ok let check it is valid or not\n<br>\n        int open=0,close=0;\n<br>\n        int n=s.length();\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n            if(s[i]=='(')open++;\n<br>\n            else if(s[i]==')') open--;\n<br>\n\n<br>\n            if(s[n-i-1]==')')close++;\n<br>\n            else if(s[n-i-1]=='(') close--;\n<br>\n\n<br>\n            if(open&lt;0){\n<br>\n                s[i]='*';\n<br>\n                open++;\n<br>\n            }\n<br>\n            if(close&lt;0){\n<br>\n                s[n-i-1]='*';\n<br>\n                close++;\n<br>\n            }\n<br>\n        }\n<br>\n        // cout&lt;&lt;s&lt;&lt;endl;\n<br>\n        string ans=\"\";\n<br>\n        for(int i=0;i&lt;n;i++)\n<br>\n          if(s[i]!='*')ans.push_back(s[i]);\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_25": {
    "body": "﻿\n\n<title>\nNote - 1963. Minimum Number of Swaps to\nMake the String Balanced\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1963. Minimum Number of Swaps to\nMake the String Balanced\n</h2>\n<hr>\n<p>\nYou are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.\n<br>\n\n<br>\nA string is called balanced if and only if:\n<br>\n\n<br>\nIt is the empty string, or\n<br>\nIt can be written as AB, where both A and B are balanced strings, or\n<br>\nIt can be written as [C], where C is a balanced string.\n<br>\nYou may swap the brackets at any two indices any number of times.\n<br>\n\n<br>\nReturn the minimum number of swaps to make s balanced.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"][][\"\n<br>\nOutput: 1\n<br>\nExplanation: You can make the string balanced by swapping index 0 with index 3.\n<br>\nThe resulting string is \"[[]]\".\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"]]][[[\"\n<br>\nOutput: 2\n<br>\nExplanation: You can do the following to make the string balanced:\n<br>\n- Swap index 0 with index 4. s = \"[]][][\".\n<br>\n- Swap index 1 with index 5. s = \"[[][]]\".\n<br>\nThe resulting string is \"[[][]]\".\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"[]\"\n<br>\nOutput: 0\n<br>\nExplanation: The string is already balanced.\n</p>\n\n\n"
  },
  "note_26": {
    "body": "﻿\n\n<title>\nNote - optimal\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\noptimal\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int minSwaps(string s) {\n<br>\n        int open=0,maxi=0,n=s.length();\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n            if(s[i]=='[')open++;\n<br>\n            else open--;\n<br>\n            if(open&lt;0)\n<br>\n              maxi=max(maxi,-open);\n<br>\n        }\n<br>\n    return (maxi+1)/2;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_27": {
    "body": "﻿\n\n<title>\nNote - 921. Minimum Add to Make\nParentheses Valid\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n921. Minimum Add to Make\nParentheses Valid\n</h2>\n<hr>\n<p>\nA parentheses string is valid if and only if:\n<br>\n\n<br>\nIt is the empty string,\n<br>\nIt can be written as AB (A concatenated with B), where A and B are valid strings, or\n<br>\nIt can be written as (A), where A is a valid string.\n<br>\nYou are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.\n<br>\n\n<br>\nFor example, if s = \"()))\", you can insert an opening parenthesis to be \"(()))\" or a closing parenthesis to be \"())))\".\n<br>\nReturn the minimum number of moves required to make s valid.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"())\"\n<br>\nOutput: 1\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"(((\"\n<br>\nOutput: 3\n</p>\n\n\n"
  },
  "note_28": {
    "body": "﻿\n\n<title>\nNote - stack\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nstack\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int minAddToMakeValid(string s) {\n<br>\n        stack&lt;char&gt;st;\n<br>\n        int extra_close=0;\n<br>\n        for(char &amp;c: s){\n<br>\n            if(c==')'){\n<br>\n                if(!st.empty())st.pop();\n<br>\n                else extra_close++;\n<br>\n            }\n<br>\n            else\n<br>\n             st.push('(');\n<br>\n        }\n<br>\n    return extra_close + st.size();\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_29": {
    "body": "﻿\n\n<title>\nNote - optimal 1 pass\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\noptimal 1 pass\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int minAddToMakeValid(string s) {\n<br>\n        int open=0,close=0;\n<br>\n        for(char &amp;c: s){\n<br>\n            if(c=='(')open++;\n<br>\n            else{\n<br>\n                if(open&gt;0)open--;\n<br>\n                else close++;\n<br>\n            }\n<br>\n        }\n<br>\n    return open+close;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_3": {
    "body": "﻿\n\n<title>\nNote - 1 Pass\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1 Pass\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool checkValidString(string s) {\n<br>\n        \n<br>\n        int open = 0;\n<br>\n        int closed = 0;\n<br>\n        int length = s.size()-1;\n<br>\n\n<br>\n        for(int i = 0; i&lt;s.size(); i++){\n<br>\n            if(s[i] == '(' || s[i] == '*'){\n<br>\n                open++;\n<br>\n            }\n<br>\n            else open--;\n<br>\n\n<br>\n            if(s[length-i] == ')' || s[length-i] == '*'){\n<br>\n                closed++;\n<br>\n            }\n<br>\n            else closed--;\n<br>\n\n<br>\n            if(closed &lt; 0 || open &lt; 0){\n<br>\n                return false;\n<br>\n            }\n<br>\n        }\n<br>\n        return true;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_30": {
    "body": "﻿\n\n<title>\nNote - 1541. Minimum Insertions to\nBalance a Parentheses String\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1541. Minimum Insertions to\nBalance a Parentheses String\n</h2>\n<hr>\n<p>\nGiven a parentheses string s containing only the characters '(' and ')'. A parentheses string is balanced if:\n<br>\n\n<br>\nAny left parenthesis '(' must have a corresponding two consecutive right parenthesis '))'.\n<br>\nLeft parenthesis '(' must go before the corresponding two consecutive right parenthesis '))'.\n<br>\nIn other words, we treat '(' as an opening parenthesis and '))' as a closing parenthesis.\n<br>\n\n<br>\nFor example, \"())\", \"())(())))\" and \"(())())))\" are balanced, \")()\", \"()))\" and \"(()))\" are not balanced.\n<br>\nYou can insert the characters '(' and ')' at any position of the string to balance it if needed.\n<br>\n\n<br>\nReturn the minimum number of insertions needed to make s balanced.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"(()))\"\n<br>\nOutput: 1\n<br>\nExplanation: The second '(' has two matching '))', but the first '(' has only ')' matching. We need to add one more ')' at the end of the string to be \"(())))\" which is balanced.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"())\"\n<br>\nOutput: 0\n<br>\nExplanation: The string is already balanced.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"))())(\"\n<br>\nOutput: 3\n<br>\nExplanation: Add '(' to match the first '))', Add '))' to match the last '('.\n</p>\n\n\n"
  },
  "note_31": {
    "body": "﻿\n\n<title>\nNote - stack\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nstack\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int minInsertions(string s) {\n<br>\n        stack&lt;char&gt; st; // To track unmatched '('\n<br>\n        int extra = 0;  // To count the extra insertions needed\n<br>\n        int n = s.length();\n<br>\n\n<br>\n        for (int i = 0; i &lt; n; ++i) {\n<br>\n            if (s[i] == '(') {\n<br>\n                st.push('('); // Push '(' into the stack\n<br>\n            } else {\n<br>\n                // Handle ')'\n<br>\n                if (!st.empty()) {\n<br>\n                    st.pop(); // Match ')' with a '('\n<br>\n                } else {\n<br>\n                    extra++; // No '(' to match, need one extra '('\n<br>\n                }\n<br>\n\n<br>\n                // Check for the second ')' in the pair\n<br>\n                if (i + 1 &lt; n &amp;&amp; s[i + 1] == ')') {\n<br>\n                    i++; // Skip the next character as it's part of a valid pair\n<br>\n                } else {\n<br>\n                    extra++; // Missing the second ')', need one extra ')'\n<br>\n                }\n<br>\n            }\n<br>\n        }\n<br>\n\n<br>\n        // Each unmatched '(' in the stack requires two ')'\n<br>\n        return st.size() * 2 + extra;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_32": {
    "body": "﻿\n\n<title>\nNote - optimal\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\noptimal\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    int minInsertions(string s) {\n<br>\n        int open = 0;\n<br>\n        int n=s.length();\n<br>\n        int extra=0;\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n            if(s[i]=='(')open++;\n<br>\n            else{\n<br>\n                if(open&gt;0)\n<br>\n                    open--;\n<br>\n                else\n<br>\n                  extra++;\n<br>\n               if(i+1&lt;n &amp;&amp; s[i+1]==')'){\n<br>\n                i++;\n<br>\n               }\n<br>\n               else{\n<br>\n                extra++;\n<br>\n               }\n<br>\n            }\n<br>\n        }\n<br>\n    return open*2+extra;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_33": {
    "body": "﻿\n\n<title>\nNote - 1021. Remove Outermost Parentheses\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1021. Remove Outermost Parentheses\n</h2>\n<hr>\n<p>\nA valid parentheses string is either empty \"\", \"(\" + A + \")\", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.\n<br>\n\n<br>\nFor example, \"\", \"()\", \"(())()\", and \"(()(()))\" are all valid parentheses strings.\n<br>\nA valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.\n<br>\n\n<br>\nGiven a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.\n<br>\n\n<br>\nReturn s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"(()())(())\"\n<br>\nOutput: \"()()()\"\n<br>\nExplanation: \n<br>\nThe input string is \"(()())(())\", with primitive decomposition \"(()())\" + \"(())\".\n<br>\nAfter removing outer parentheses of each part, this is \"()()\" + \"()\" = \"()()()\".\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"(()())(())(()(()))\"\n<br>\nOutput: \"()()()()(())\"\n<br>\nExplanation: \n<br>\nThe input string is \"(()())(())(()(()))\", with primitive decomposition \"(()())\" + \"(())\" + \"(()(()))\".\n<br>\nAfter removing outer parentheses of each part, this is \"()()\" + \"()\" + \"()(())\" = \"()()()()(())\".\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"()()\"\n<br>\nOutput: \"\"\n<br>\nExplanation: \n<br>\nThe input string is \"()()\", with primitive decomposition \"()\" + \"()\".\n<br>\nAfter removing outer parentheses of each part, this is \"\" + \"\" = \"\".\n<br>\n \n<br>\n\n<br>\nConstraints:\n<br>\n\n<br>\n1 &lt;= s.length &lt;= 105\n<br>\ns[i] is either '(' or ')'.\n<br>\ns is a valid parentheses string.\n</p>\n\n\n"
  },
  "note_34": {
    "body": "﻿\n\n<title>\nNote - optimal\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\noptimal\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    string removeOuterParentheses(string s) {\n<br>\n        int open=0,n=s.length();\n<br>\n        string ans=\"\";\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n            if(s[i]=='(')open++;\n<br>\n            else open--;\n<br>\n\n<br>\n           if((open==1 &amp;&amp; s[i]=='(' ) || (open==0 &amp;&amp; s[i]==')'))continue;\n<br>\n           ans.push_back(s[i]);\n<br>\n        }\n<br>\n    return ans;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_4": {
    "body": "﻿\n\n<title>\nNote - Recursive\n O(3^n)\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nRecursive\n O(3^n)\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\nint t[101][101];\n<br>\nbool solve(int index, int open, string &amp;s, int n){\n<br>\n    if(index == n){\n<br>\n        return (open == 0);\n<br>\n    }\n<br>\n    if(t[index][open] !=-1){\n<br>\n        return t[index][open];\n<br>\n    }\n<br>\n    bool is_valid = false;\n<br>\n    if(s[index] == '*'){\n<br>\n      if(open &gt; 0){\n<br>\n        is_valid |= solve( index +1 , open -1, s, n); \n<br>\n      }\n<br>\n\n<br>\n      is_valid |= solve(index + 1, open + 1, s, n);\n<br>\n\n<br>\n      is_valid |= solve(index + 1, open, s, n);\n<br>\n    }else if(s[index] == '('){\n<br>\n        is_valid |= solve(index+1, open +1, s, n);\n<br>\n    }else{\n<br>\n        if(open &gt; 0){\n<br>\n            is_valid |= solve(index+1, open -1, s, n);\n<br>\n        }\n<br>\n    }\n<br>\n    return t[index][open] = is_valid;\n<br>\n}\n<br>\n    bool checkValidString(string s) {\n<br>\n        int n = s.length();\n<br>\n        memset(t, -1, sizeof(t));\n<br>\n        return solve(0, 0, s, n);\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_5": {
    "body": "﻿\n\n<title>\nNote - stack\nO(n) &amp; O(2n)\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nstack\nO(n) &amp; O(2n)\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool checkValidString(string s) {\n<br>\n        int n=s.length();\n<br>\n        stack&lt;char&gt;open,star;\n<br>\n        for(int i=0;i&lt;n;i++){\n<br>\n            if(s[i]=='(')\n<br>\n                open.push(i);\n<br>\n            else if(s[i]=='*')\n<br>\n               star.push(i);\n<br>\n            else{\n<br>\n                if(!open.empty())\n<br>\n                    open.pop();\n<br>\n                else if(!star.empty())\n<br>\n                    star.pop();\n<br>\n                else\n<br>\n                    return false;\n<br>\n            }\n<br>\n        }\n<br>\n        while(!open.empty()){\n<br>\n            if(star.empty())\n<br>\n                return false;\n<br>\n            else if(open.top()&lt;star.top()){\n<br>\n                open.pop();\n<br>\n                star.pop();\n<br>\n            }\n<br>\n            else\n<br>\n                return false;\n<br>\n        }\n<br>\n        return true;\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_6": {
    "body": "﻿\n\n<title>\nNote - 2116. Check if a Parentheses\nString Can Be Valid\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2116. Check if a Parentheses\nString Can Be Valid\n</h2>\n<hr>\n<p>\n2116. Check if a Parentheses String Can Be Valid\n<br>\nA parentheses string is a non-empty string consisting only of '(' and ')'. It is valid if any of the following conditions is true:\n<br>\n\n<br>\nIt is ().\n<br>\nIt can be written as AB (A concatenated with B), where A and B are valid parentheses strings.\n<br>\nIt can be written as (A), where A is a valid parentheses string.\n<br>\nYou are given a parentheses string s and a string locked, both of length n. locked is a binary string consisting only of '0's and '1's. For each index i of locked,\n<br>\n\n<br>\nIf locked[i] is '1', you cannot change s[i].\n<br>\nBut if locked[i] is '0', you can change s[i] to either '(' or ')'.\n<br>\nReturn true if you can make s a valid parentheses string. Otherwise, return false.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\n\n<br>\nInput: s = \"))()))\", locked = \"010100\"\n<br>\nOutput: true\n<br>\nExplanation: locked[1] == '1' and locked[3] == '1', so we cannot change s[1] or s[3].\n<br>\nWe change s[0] and s[4] to '(' while leaving s[2] and s[5] unchanged to make s valid.\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"()()\", locked = \"0000\"\n<br>\nOutput: true\n<br>\nExplanation: We do not need to make any changes because s is already valid.\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \")\", locked = \"0\"\n<br>\nOutput: false\n<br>\nExplanation: locked permits us to change s[0]. \n<br>\nChanging s[0] to either '(' or ')' will not make s valid.\n</p>\n\n\n"
  },
  "note_7": {
    "body": "﻿\n\n<title>\nNote - 20. valid parenthesis\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n20. valid parenthesis\n</h2>\n<hr>\n<p>\nGiven a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n<br>\n\n<br>\nAn input string is valid if:\n<br>\n\n<br>\nOpen brackets must be closed by the same type of brackets.\n<br>\nOpen brackets must be closed in the correct order.\n<br>\nEvery close bracket has a corresponding open bracket of the same type.\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: s = \"()\"\n<br>\n\n<br>\nOutput: true\n<br>\n\n<br>\nExample 2:\n<br>\n\n<br>\nInput: s = \"()[]{}\"\n<br>\n\n<br>\nOutput: true\n<br>\n\n<br>\nExample 3:\n<br>\n\n<br>\nInput: s = \"(]\"\n<br>\n\n<br>\nOutput: false\n<br>\n\n<br>\nExample 4:\n<br>\n\n<br>\nInput: s = \"([])\"\n<br>\n\n<br>\nOutput: true\n</p>\n\n\n"
  },
  "note_8": {
    "body": "﻿\n\n<title>\nNote - stack O(n) &amp; O(n)\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nstack O(n) &amp; O(n)\n</h2>\n<hr>\n<p>\nclass Solution {\n<br>\npublic:\n<br>\n    bool isValid(string s) {\n<br>\n        stack&lt;char&gt;st;\n<br>\n        for(char &amp;c: s){\n<br>\n            if(c=='(' || c=='[' || c=='{')st.push(c);\n<br>\n            else{\n<br>\n                if(st.empty())return false;\n<br>\n                if(c==')' &amp;&amp; st.top()=='(')st.pop();\n<br>\n                else if(c=='}' &amp;&amp; st.top()=='{')st.pop();\n<br>\n                else if(c==']' &amp;&amp; st.top()=='[')st.pop();\n<br>\n                else return false;\n<br>\n            }\n<br>\n        }\n<br>\n    return st.empty();\n<br>\n    }\n<br>\n};\n</p>\n\n\n"
  },
  "note_9": {
    "body": "﻿\n\n<title>\nNote - 22. Generate Parentheses\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n22. Generate Parentheses\n</h2>\n<hr>\n<p>\nGiven n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\n<br>\n\n<br>\n \n<br>\n\n<br>\nExample 1:\n<br>\n\n<br>\nInput: n = 3\n<br>\nOutput: [\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]\n<br>\nExample 2:\n<br>\n\n<br>\nInput: n = 1\n<br>\nOutput: [\"()\"]\n</p>\n\n\n"
  }
}

 export const coordsData = [
  {
    "coords": "1026,95,1042,111",
    "noteKey": "note_1"
  },
  {
    "coords": "1190,38,1206,54",
    "noteKey": "note_2"
  },
  {
    "coords": "1324,46,1340,62",
    "noteKey": "note_3"
  },
  {
    "coords": "1175,100,1191,116",
    "noteKey": "note_4"
  },
  {
    "coords": "1192,161,1208,177",
    "noteKey": "note_5"
  },
  {
    "coords": "1077,244,1093,260",
    "noteKey": "note_6"
  },
  {
    "coords": "1018,332,1034,348",
    "noteKey": "note_7"
  },
  {
    "coords": "1213,334,1229,350",
    "noteKey": "note_8"
  },
  {
    "coords": "1057,401,1073,417",
    "noteKey": "note_9"
  },
  {
    "coords": "1243,403,1259,419",
    "noteKey": "note_10"
  },
  {
    "coords": "1396,403,1412,419",
    "noteKey": "note_11"
  },
  {
    "coords": "1093,493,1109,509",
    "noteKey": "note_12"
  },
  {
    "coords": "1217,472,1233,488",
    "noteKey": "note_13"
  },
  {
    "coords": "1227,517,1243,533",
    "noteKey": "note_14"
  },
  {
    "coords": "1017,585,1033,601",
    "noteKey": "note_15"
  },
  {
    "coords": "1155,596,1171,612",
    "noteKey": "note_16"
  },
  {
    "coords": "1105,672,1121,688",
    "noteKey": "note_17"
  },
  {
    "coords": "461,26,477,42",
    "noteKey": "note_18"
  },
  {
    "coords": "164,38,180,54",
    "noteKey": "note_19"
  },
  {
    "coords": "461,150,477,166",
    "noteKey": "note_20"
  },
  {
    "coords": "148,117,164,133",
    "noteKey": "note_21"
  },
  {
    "coords": "148,162,164,178",
    "noteKey": "note_22"
  },
  {
    "coords": "461,274,477,290",
    "noteKey": "note_23"
  },
  {
    "coords": "176,285,192,301",
    "noteKey": "note_24"
  },
  {
    "coords": "461,362,477,378",
    "noteKey": "note_25"
  },
  {
    "coords": "103,373,119,389",
    "noteKey": "note_26"
  },
  {
    "coords": "461,463,477,479",
    "noteKey": "note_27"
  },
  {
    "coords": "172,452,188,468",
    "noteKey": "note_28"
  },
  {
    "coords": "172,497,188,513",
    "noteKey": "note_29"
  },
  {
    "coords": "461,578,477,594",
    "noteKey": "note_30"
  },
  {
    "coords": "150,567,166,583",
    "noteKey": "note_31"
  },
  {
    "coords": "150,612,166,628",
    "noteKey": "note_32"
  },
  {
    "coords": "466,680,482,696",
    "noteKey": "note_33"
  },
  {
    "coords": "84,682,100,698",
    "noteKey": "note_34"
  }
]