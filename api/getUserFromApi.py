#!/user/bin/env python
# getUserFromApi.py created by Nathan Stowe
# for the OverwatchLFG COMP55 Project

# This script takes in a batttlenet username as a command line argument and returns a JSON file
# from the OverwatchAPI with the users stats

# run using:
# python2 <username>

import urllib2
import cookielib
import argparse
import os

#cmd line args
parser = argparse.ArgumentParser(description='Fetch URLs of Overwatch profiles from OWAPI')
parser.add_argument('userName', type=str, help='BattleNet username including tag, where the \# is replaced by -')
args = parser.parse_args()

#url and header info
site= "https://owapi.net/api/v3/u/" + args.userName + "/stats"
hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
       'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
       'Accept-Encoding': 'none',
       'Accept-Language': 'en-US,en;q=0.8',
       'Connection': 'keep-alive'}

#send request for JSON files
req = urllib2.Request(site, headers=hdr)

#catch http errors
try:
    page = urllib2.urlopen(req)
except urllib2.HTTPError, e:
    print e.fp.read()

#read JSON and print(for now)
content = page.read()
print content
