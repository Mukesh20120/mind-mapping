export const notesData = {
  "note_1": {
    "title": "\nNote - Multi-master replica\n",
    "body": "﻿\n\n<title>\nNote - Multi-master replica\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nMulti-master replica\n</h2>\n<hr>\n<p>\nDefination\n<br>\nIn multi master replica a unique id is generated by the server by adding k in the squence such that no same server have same id\n<br>\n\n<br>\nPros:\n<br>\neasy to implement\n<br>\n\n<br>\nCons:\n<br>\n1. Hard to scale when multiple data center\n<br>\n2. id does't go with time accross multiple device\n<br>\n3. New server added or removed hard to maintain\n</p>\n\n\n"
  },
  "note_10": {
    "title": "\nNote - Extensibility\n",
    "body": "﻿\n\n<title>\nNote - Extensibility\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nExtensibility\n</h2>\n<hr>\n<p>\nExtensibility\n<br>\n\n<br>\nAbility to modify or update the algorithm without need of more changes and can include more module/ plugin if require\n</p>\n\n\n"
  },
  "note_11": {
    "title": "\nNote - WorkFlow\n",
    "body": "﻿\n\n<title>\nNote - WorkFlow\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nWorkFlow\n</h2>\n<hr>\n<p>\nWorkFlow of the Web Crawler\n<br>\n\n<br>\n1.Add seed url to the frontier\n<br>\n2.HTML downloader fetches a list from url frontier\n<br>\n3.HTML get ip from dns resolver and get download html \n<br>\n4.Content parse and check for malformed of html\n<br>\n5.Content Seen \n<br>\n  -if Seen discard the page and urls\n<br>\n -else save the content in storage and pass the content to link extractor\n<br>\n7. Link extractor extract the link \n<br>\n8. Extracted linked pass to the URL filter\n<br>\n9. After filter pass to the url seen\n<br>\n10. it check if url is done process or not \n<br>\n11. If not process pass it to frontier\n</p>\n\n\n"
  },
  "note_12": {
    "title": "\nNote - Politeness\n",
    "body": "﻿\n\n<title>\nNote - Politeness\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nPoliteness\n</h2>\n<hr>\n<p>\nPolitness\n<br>\n\n<br>\nsending too many request = impolite\n<br>\nsolution\n<br>\n-download one page at a time\n<br>\n-multiple queue and multiple thread\n<br>\n-each queue contain same host\n<br>\n\n<br>\nFlow \n<br>\n1. Queue router: all queue contain same host url\n<br>\n2. map table map the host url to queue\n<br>\n3.FIFO queue contain the url of same host\n<br>\n4.Queue selector select the above queue\n<br>\n5.worker thread download the page also they can the delay\n</p>\n\n\n"
  },
  "note_13": {
    "title": "\nNote - Prioritization\n",
    "body": "﻿\n\n<title>\nNote - Prioritization\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nPrioritization\n</h2>\n<hr>\n<p>\nPrioritization\n<br>\n\n<br>\nWhich url should be consider first like apple home page post or apple product list page\n<br>\n\n<br>\nFlow\n<br>\n1. It take url and compute the priorities\n<br>\n2. queues range from f1 to fn with greater number high priority\n<br>\n3. queue selector randomly choose queue base on high priority\n</p>\n\n\n"
  },
  "note_14": {
    "title": "\nNote - Freshness\n",
    "body": "﻿\n\n<title>\nNote - Freshness\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nFreshness\n</h2>\n<hr>\n<p>\nFreshness\n<br>\n\n<br>\nAs page update frequently we need to get the data fast\n<br>\nsolution\n<br>\n1. Recrawl based on web page update history\n<br>\n2. Prioritize url imp pg first and more frequently\n</p>\n\n\n"
  },
  "note_15": {
    "title": "\nNote - Storage \n",
    "body": "﻿\n\n<title>\nNote - Storage \n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nStorage \n</h2>\n<hr>\n<p>\nStorage for URL Frontier\n<br>\n\n<br>\nSaving a lot of data in disk is not good method and store on ram is not possible as there are millions of url \n<br>\n\n<br>\nsolution:- Take hybrid approach store the url in disk and for queue/dequeue store url in memory buffer and it read and write from disk peroidically\n</p>\n\n\n"
  },
  "note_16": {
    "title": "\nNote - DFS vs BFS\n",
    "body": "﻿\n\n<title>\nNote - DFS vs BFS\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nDFS vs BFS\n</h2>\n<hr>\n<p>\nDFS vs BFS\n<br>\n\n<br>\nDFS is not consider because we don't know the deapth of the url it could be millions of URL\n<br>\n\n<br>\nBFS work on FIFO\n<br>\n2 Problem\n<br>\ni. Most web contain there own weburl so it make server will be flooded with the request this is impolite\n<br>\nII. Priority of the URL not consider (Page,ranks,web traffic,update fre)\n</p>\n\n\n"
  },
  "note_17": {
    "title": "\nNote - 1.Distrubuted Crawl\n",
    "body": "﻿\n\n<title>\nNote - 1.Distrubuted Crawl\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n1.Distrubuted Crawl\n</h2>\n<hr>\n<p>\nDistrubuted Crawl\n<br>\n\n<br>\nHave multiple server and multiple thread each responsible for a subset url\n</p>\n\n\n"
  },
  "note_18": {
    "title": "\nNote - 2.Cache DNS Resolver\n",
    "body": "﻿\n\n<title>\nNote - 2.Cache DNS Resolver\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2.Cache DNS Resolver\n</h2>\n<hr>\n<p>\nCache DNS Resolver\n<br>\n\n<br>\nDNS call take upto 10 to 200ms when it give a call the all thread stop and wait for the response to overcome this problem we store the name to ip in cache and run cron job periodically to update .\n</p>\n\n\n"
  },
  "note_19": {
    "title": "\nNote - 3. Locality\n",
    "body": "﻿\n\n<title>\nNote - 3. Locality\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n3. Locality\n</h2>\n<hr>\n<p>\nLocality\n<br>\n\n<br>\nCrawl server are close to website host experience fast download.\n</p>\n\n\n"
  },
  "note_2": {
    "title": "\nNote - UUID\n",
    "body": "﻿\n\n<title>\nNote - UUID\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nUUID\n</h2>\n<hr>\n<p>\nAnalogy \n<br>\nImagine a party where every guest is wear a random generated tag and no two tag will be same \n<br>\n\n<br>\nDefinition\n<br>\n-UUID is 128 bit long hexadecimal\n<br>\n-it is hexadecimal id\n<br>\n-No two id identical\n<br>\n\n<br>\n\n<br>\nPros:\n<br>\n-No synchronization issue as it generate the unique id\n<br>\n-each server can have there own generator\n<br>\n\n<br>\nCons:\n<br>\n-128 bit long\n<br>\n-hexadecimal\n<br>\n-it not go up with time\n</p>\n\n\n"
  },
  "note_20": {
    "title": "\nNote - 4. Short Timeout\n",
    "body": "﻿\n\n<title>\nNote - 4. Short Timeout\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n4. Short Timeout\n</h2>\n<hr>\n<p>\nShort Timeout\n<br>\n\n<br>\nsome time url take a lot of time so we need to fix the max time it take to download.\n<br>\nif crawler not response in given time it stop the job move to next job\n</p>\n\n\n"
  },
  "note_21": {
    "title": "\nNote - 2. Spider Trap\n",
    "body": "﻿\n\n<title>\nNote - 2. Spider Trap\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n2. Spider Trap\n</h2>\n<hr>\n<p>\nSpider trap\n<br>\n\n<br>\nURL Stuck in the infinite loop\n<br>\n\n<br>\nsolution:-\n<br>\n1. Setting maximum length of URL\n<br>\n2. Manually verify the URL\n</p>\n\n\n"
  },
  "note_22": {
    "title": "\nNote - 3. Data Noise\n",
    "body": "﻿\n\n<title>\nNote - 3. Data Noise\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\n3. Data Noise\n</h2>\n<hr>\n<p>\nData Noise\n<br>\n\n<br>\nSome content and Url is not usefull\n<br>\nsuch as ADS, code snippet , spam url etc\n</p>\n\n\n"
  },
  "note_3": {
    "title": "\nNote - Ticket Server\n",
    "body": "﻿\n\n<title>\nNote - Ticket Server\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nTicket Server\n</h2>\n<hr>\n<p>\nDefinition\n<br>\nOnly one server is responsible to generate the id for the other servers\n<br>\n\n<br>\n\n<br>\nPros:\n<br>\n-easy to implement\n<br>\n\n<br>\nCons:\n<br>\n-single point of failure and when another server we take for backup new problem arise data synchronization\n</p>\n\n\n"
  },
  "note_4": {
    "title": "\nNote - Twitter Snowflaw\n",
    "body": "﻿\n\n<title>\nNote - Twitter Snowflaw\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nTwitter Snowflaw\n</h2>\n<hr>\n<p>\nDefinition\n<br>\nIt is generated by the twitter engineers to solve there problem of unique id for large number of users\n<br>\nit is ordered and timely generated\n<br>\nit consist of 64 bit which segment divided\n<br>\n1 bit sign\n<br>\n41 bit for time stamp\n<br>\n5 bit for data center code\n<br>\n5 bit for machine it\n<br>\n12 bit for sequence number\n<br>\n\n<br>\nPros:\n<br>\n-scalable\n<br>\n-efficient\n<br>\n-time scale \n<br>\n\n<br>\ncons:\n<br>\n-clock drift\n<br>\n-complex to setup\n<br>\n-fixed length\n<br>\n\n<br>\nsolution: - Network Time protocol\n</p>\n\n\n"
  },
  "note_5": {
    "title": "\nNote - Design a Web Crawler\n",
    "body": "﻿\n\n<title>\nNote - Design a Web Crawler\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nDesign a Web Crawler\n</h2>\n<hr>\n<p>\nAlso known as robot or spider\n<br>\n\n<br>\nTheir work is to scrap the web page go on url download web content like photo, video , pdf etc \n<br>\n\n<br>\nScan the page for new url and dowload there content process go on untile all the url stop coming\n<br>\n\n<br>\nUsage\n<br>\n1. Search engine index\n<br>\n2.Web archiver\n<br>\n3. Mining\n<br>\n4.Monitor\n</p>\n\n\n"
  },
  "note_6": {
    "title": "\nNote - Design Scope Basic Overview\n",
    "body": "﻿\n\n<title>\nNote - Design Scope Basic Overview\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nDesign Scope Basic Overview\n</h2>\n<hr>\n<p>\nBasic Algorithm\n<br>\n1. Get the Url download all the web page content\n<br>\n2. Extract the url from pages\n<br>\n3.Add new Url in downloader for download web page repeat these 3 steps\n</p>\n\n\n"
  },
  "note_7": {
    "title": "\nNote - Scalability\n",
    "body": "﻿\n\n<title>\nNote - Scalability\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nScalability\n</h2>\n<hr>\n<p>\nScalability\n<br>\n\n<br>\nWeb chain is large it must be efficient in parallelization.\n</p>\n\n\n"
  },
  "note_8": {
    "title": "\nNote - Robustness\n",
    "body": "﻿\n\n<title>\nNote - Robustness\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nRobustness\n</h2>\n<hr>\n<p>\nRobustness\n<br>\n\n<br>\nThe web pages is full of bad html data, bad Url and other things it must be albe to handle those edge case data\n</p>\n\n\n"
  },
  "note_9": {
    "title": "\nNote - Politeness\n",
    "body": "﻿\n\n<title>\nNote - Politeness\n</title>\n<link rel=\"shortcut icon\" type=\"image/png\" href=\"../favicon.png\">\n\n\n<h2>\nPoliteness\n</h2>\n<hr>\n<p>\nPoliteness\n<br>\n\n<br>\nWeb crawler can create 10000/sec request so it must be maintain interval so the web can't detect it's a bot or not fill the server with web crawler request\n</p>\n\n\n"
  }
};

export const coordsData = [
  { coords: '568,38,584,54', noteKey: 'note_1' },
  { coords: '612,80,628,96', noteKey: 'note_2' },
  { coords: '681,26,697,42', noteKey: 'note_3' },
  { coords: '765,66,781,82', noteKey: 'note_4' },
  { coords: '689,413,705,429', noteKey: 'note_5' },
  { coords: '245,1019,261,1035', noteKey: 'note_6' },
  { coords: '216,1136,232,1152', noteKey: 'note_7' },
  { coords: '165,1189,181,1205', noteKey: 'note_8' },
  { coords: '103,1154,119,1170', noteKey: 'note_9' },
  { coords: '303,1161,319,1177', noteKey: 'note_10' },
  { coords: '111,926,127,942', noteKey: 'note_11' },
  { coords: '399,1105,415,1121', noteKey: 'note_12' },
  { coords: '526,1092,542,1108', noteKey: 'note_13' },
  { coords: '580,1042,596,1058', noteKey: 'note_14' },
  { coords: '463,1060,479,1076', noteKey: 'note_15' },
  { coords: '294,892,310,908', noteKey: 'note_16' },
  { coords: '943,1083,959,1099', noteKey: 'note_17' },
  { coords: '1049,1109,1065,1125', noteKey: 'note_18' },
  { coords: '1076,1054,1092,1070', noteKey: 'note_19' },
  { coords: '1186,1092,1202,1108', noteKey: 'note_20' },
  { coords: '1131,877,1147,893', noteKey: 'note_21' },
  { coords: '1052,844,1068,860', noteKey: 'note_22' }
];

