import datetime
import random
import time

#python 3.2.3 outputs OWLFG_testData.sql and testData_expectedResults.txt

uid = "2"
name = "alexicat"
info = "somebody once told me"
server = "USA"
platform = "PC"
groupSize = "1"
language = "ENG"
seasonRank = "2270"
hasMicrophone = "TRUE"
role = "SUPPORT"
isMature = "TRUE"
level = "255"
isCompetitive = "TRUE"
creationTime = "2017-03-26 21-46-40"
cmpCount = 0
count = 0

phrses = []
with open("phrases.txt",'r') as f:
    phrases = f.read().splitlines()

names = []
with open("names.txt",'r') as f:
    names = f.read().splitlines()

cmpServer = "None"
cmpPlatform = "None"
cmpGroupSize = "None"
cmpLanguage = "None"
cmpHasMicrophone = "None"
cmpRole = "None"
cmpIsCompetitive = "None"
cmpMaxSeasonRank = -1
cmpMinSeasonRank = -1
cmpMaxLevel = -1
cmpMinLevel = -1
roles = ["OFFENSE","DEFENSE","TANK","SUPPORT"]
languages = ["ENG", "ES", "CN", "JPN", "KOR"]
servers = ["USA","ASIA","EUROPE","AUSTRALIA"]
platforms = ["PC","XBOX","PS4"]
players = int(input("Enter number of players: "))
filter = input("Filter data?: true or false ")
selN = 0
wentThroughFilter = 0
def getServer():
    selN = int(input("Enter Server filter number: 0:USA 1:ASIA 2:EUROPE 3:AUSTRALIA: "))
    global cmpServer
    global cmpCount
    cmpServer = servers[selN]
    cmpCount +=1
def getPlatform():
    selN = int(input("Enter Platform filter number: 0:PC 1:XBOX 2:PS4: "))
    global cmpPlatform
    global cmpCount
    cmpPlatform = platforms[selN]
    cmpCount +=10
def getGroupSize():
    selN =1
    while selN <6 and selN >0:
        selN = int(input("Enter Group Size filter number: 1-6: "))
    global cmpGroupSize
    global cmpCount
    cmpGroupSize = str(selN)
    cmpCount += 100
def getLanguage():
    selN = int(input("Enter Language filter number: 0:ENG 1:ES 2:CN 3:JPN 4:KOR: "))
    global cmpLanguage
    global cmpCount
    cmpLanguage = languages[selN]
    cmpCount += 1000
def getSeasonRank():
    global cmpMinSeasonRank
    global cmpMaxSeasonRank
    while cmpMaxSeasonRank > 5000 or cmpMaxSeasonRank < 0:
        cmpMaxSeasonRank = int(input("Enter Max Season Rank between 0 and 5000"))
    while cmpMinSeasonRank > 5000 or cmpMinSeasonRank < 0 or cmpMinSeasonRank > cmpMaxSeasonRank:
        cmpMinSeasonRank = int(input("Enter Min Season Rank between 0 and 5000 and less than Max Season Rank"))
    global cmpCount
    cmpCount += 10000
def getHasMicrophone():
    global cmpHasMicrophone
    global cmpCount
    selN = int(input("Enter Microphone filter number: 0:FALSE 1:TRUE: "))
    if selN == 0:
        cmpHasMicrophone = "FALSE"
    else:
        cmpHasMicrophone = "TRUE"
    cmpCount += 100000
def getRole():
    selN = int(input("Enter Role filter number: 0:OFFENSE 1:DEFENSE 2:TANK 3:SUPPORT: "))
    global cmpRole
    global cmpCount
    cmpRole = roles[selN]
    cmpCount += 1000000
def getIsCompetitive():
    selN = int(input("Enter IsCompetitive filter number: 0:FALSE 1:TRUE: "))
    global cmpIsCompetitive
    global cmpCount
    if selN == 0:
        cmpIsCompetitive = "FALSE"
    else:
        cmpIsCompetitive = "TRUE"
    cmpCount += 10000000
def getLevel():
    global cmpMinLevel
    global cmpMaxLevel
    while cmpMaxLevel > 2500 or cmpMaxLevel < 0:
        cmpMaxLevel = int(input("Enter Max level between 0 and 2500"))
    while cmpMinLevel > 2500 or cmpMinLevel < 0 or cmpMinLevel > cmpMaxLevel:
        cmpMinLevel = int(input("Enter Min level between 0 and 2500 and less than Max level"))
    global cmpCount
    cmpCount += 100000000

def exit():
    return
while filter.lower() == 'true':
    selection = int(input("Enter number of filter:\nServer = 0\nPlatform = 1\nGroup Size = 2\nLanguage = 3\nSeason Rank = 4\nHas Mic = 5\nRole = 6\nIs Competitive = 7\nLevel = 8\nexit = 9\n\n"))
    options = {0:getServer,
            1:getPlatform,
            2:getGroupSize,
            3:getLanguage,
            4:getSeasonRank,
            5:getHasMicrophone,
            6:getRole,
            7:getIsCompetitive,
            8:getLevel,
            9:exit }

    options[selection]()
    wentThroughFilter = 1
    print("Filtering : "+"\nServer: "+cmpServer+"\nPlatform:"+cmpPlatform+"\nGroup Size: "+cmpGroupSize+"\nLanguage: "+cmpLanguage+"\nSeason Rank: "+str(cmpMaxSeasonRank)+"\nHas Microphone: "+cmpHasMicrophone+"\nRole: "+cmpRole+"\nIs Competitive: "+cmpIsCompetitive+"\nLevel: "+str(cmpMaxLevel))
    filter = input("Enter another filter? true or false:")

def dateTime():
    creationTime = str(datetime.datetime.now())
    #creationTime = creationTime[:"."]
    #creationTime = creationTime.replace(":","-")
    return creationTime


with open("OWLFG_testData.sql",'w') as sqlOut,open("testData_expectedResults.txt",'w') as expectedResults:

    for i in range(1, players + 1):
        uid = str(i)
        name = names[random.randint(0, names.__len__() - 1)]
        print(name)
        info = phrases[random.randint(0, phrases.__len__() - 1)]
        print(info)
        server = servers[random.randint(0, servers.__len__() - 1)]
        print(server)
        platform = platforms[random.randint(0, platforms.__len__() - 1)]
        print(platform)
        groupSize = str(random.randint(1, 6))
        print(groupSize)
        language = languages[random.randint(0, languages.__len__() - 1)]
        print(language)
        seasonRank = str(random.randint(1, 3000))
        print(seasonRank)
        hasMicrophone = "TRUE" if random.randint(1, 2) == 1 else "FALSE"
        print(hasMicrophone)
        role = roles[random.randint(0, roles.__len__() - 1)]
        print(role)
        isMature = "TRUE" if random.randint(1, 2) == 1 else "FALSE"
        print(isMature)
        level = str(random.randint(0, 99))
        print(level)
        isCompetitive = "TRUE" if random.randint(1, 2) == 1 else "FALSE"
        print(isCompetitive)
        creationTime = dateTime()
        print(creationTime)
        sqlOut.write("INSERT INTO Players VALUES(\'"+uid+"\',\'"+name+"\',\'"+info+"\',\'"+server+"\',\'"+platform+"\',\'"+groupSize+"\',\'"+language+"\',\'"+seasonRank+"\',\'"+hasMicrophone+"\',\'"+role+"\',\'"+isMature+"\',\'"+level+"\',\'"+isCompetitive+"\',\'"+creationTime+"\');\n"
        )

        count = 0
        if cmpServer == server:
            count+=1
        if cmpPlatform == platform:
            count+=10
        if cmpGroupSize == groupSize:
            print("!!!!!")
            count+=100
        if cmpLanguage == language:
            count+=1000
        if cmpMaxSeasonRank >= int(seasonRank) and cmpMinSeasonRank <= int(seasonRank):
            count+=10000
        if cmpHasMicrophone == hasMicrophone:
            count+= 100000
        if cmpRole == role:
            count+=1000000
        if cmpIsCompetitive == isCompetitive:
            count+= 10000000
        if cmpMaxLevel >= int(level) and cmpMinLevel <= int(level):
            count+= 100000000

        if cmpCount == count and( wentThroughFilter == 0 or cmpIsCompetitive == isCompetitive or cmpHasMicrophone == hasMicrophone or cmpGroupSize == groupSize or cmpLanguage == language\
                or cmpPlatform == platform or cmpRole == role or (cmpMaxSeasonRank >= int(seasonRank) and cmpMinSeasonRank <= int(seasonRank)) or (cmpMaxLevel >= int(level) and cmpMinLevel <= int(level)) or cmpServer == server):
            expectedResults.write(uid+"\n"+name+"\n"+info+"\n"+server+"\n"+platform+"\n"+groupSize+"\n"+language+"\n"+seasonRank+"\n"+hasMicrophone+"\n"+role+"\n"+isMature+"\n"+level+"\n"+isCompetitive+"\n"+creationTime+"\n")
            expectedResults.write("========================================================================\n")