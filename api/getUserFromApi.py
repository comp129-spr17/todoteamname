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
import sys
import json

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
    sys.exit("\n" + "profile " + args.userName + " not found!" + "\n")

#parse and print JSON data
#look for comp rank, level, and prestige
content = page.read()
j = json.loads(content)

#LEVEL
#levelDig is all digits except 1st digit of level data
levelDig = j['us']['stats']['quickplay']['overall_stats']['level']
#prestige is 1st digit, divided by 100
prestige = j['us']['stats']['quickplay']['overall_stats']['prestige']
#actualLvl is player's actual level
actualLvl = (prestige*100) + levelDig

#COMPETITIVE RANK
rank = j['us']['stats']['competitive']['overall_stats']['comprank']

print "\n" + "Returning player data for " + args.userName + "\n"
print "Rank: " + (str)(rank)
print "Level: " + (str)(actualLvl) + "\n"
