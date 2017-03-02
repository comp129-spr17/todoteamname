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
cmpSeasonRank = "None"
cmpHasMicrophone = "None"
cmpRole = "None"
cmpIsCompetitive = "None"
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
    cmpCount +=1
def getGroupSize():
    selN =1
    while selN <6 and selN >0:
        selN = int(input("Enter Group Size filter number: 1-6: "))
    global cmpGroupSize
    global cmpCount
    cmpGroupSize = selN
    cmpCount += 1
def getLanguage():
    selN = int(input("Enter Language filter number: 0:ENG 1:ES 2:CN 3:JPN 4:KOR: "))
    global cmpLanguage
    global cmpCount
    cmpLanguage = languages[selN]
    cmpCount += 1
def getSeasonRank():
    selN = 1
    while selN < 3000 and selN > 0:
        selN = int(input("Enter Season Rank filter number (filters between entered input and 100 ranks higher): 1-6: "))
    global cmpSeasonRank
    global cmpCount
    cmpCount += 1
    cmpSeasonRank = selN
def getHasMicrophone():
    global cmpHasMicrophone
    global cmpCount
    selN = int(input("Enter Microphone filter number: 0:FALSE 1:TRUE: "))
    if selN == 0:
        cmpHasMicrophone = "FALSE"
    else:
        cmpHasMicrophone = "TRUE"
    cmpCount += 1
def getRole():
    selN = int(input("Enter Role filter number: 0:OFFENSE 1:DEFENSE 2:TANK 3:SUPPORT: "))
    global cmpRole
    global cmpCount
    cmpRole = roles[selN]
    cmpCount += 1
def getIsCompetitive():
    selN = int(input("Enter IsCompetitive filter number: 0:FALSE 1:TRUE: "))
    global cmpIsCompetitive
    global cmpCount
    if selN == 0:
        cmpIsCompetitive = "FALSE"
    else:
        cmpIsCompetitive = "TRUE"
    cmpCount += 1
def exit():
    return
while filter.lower() == 'true':
    selection = int(input("Enter number of filter:\nServer = 0\nPlatform = 1\nGroup Size = 2\nLanguage = 3\nSeason Rank = 4\nHas Mic = 5\nRole = 6\nIs Competitive = 7\nexit = 8\n\n"))
    options = {0:getServer,
            1:getPlatform,
            2:getGroupSize,
            3:getLanguage,
            4:getSeasonRank,
            5:getHasMicrophone,
            6:getRole,
            7:getIsCompetitive,
            8:exit}

    options[selection]()
    wentThroughFilter = 1
    print("Filtering : "+"\nServer: "+cmpServer+"\nPlatform:"+cmpPlatform+"\nGroup Size: "+cmpGroupSize+"\nLanguage: "+cmpLanguage+"\nSeason Rank: "+cmpSeasonRank+"\nHas Microphone: "+cmpHasMicrophone+"\nRole: "+cmpRole+"\nIs Competitive: "+cmpIsCompetitive)
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
        if cmpIsCompetitive == isCompetitive:
            count+= 1
        if cmpHasMicrophone == hasMicrophone:
            count+= 1
        if cmpGroupSize == groupSize:
            count+=1
        if cmpLanguage == language:
            count+=1
        if cmpPlatform == platform:
            count+=1
        if cmpRole == role:
            count+=1
        if cmpSeasonRank == seasonRank:
            count+=1
        if cmpServer == server:
            count+=1
        if cmpCount == count and( wentThroughFilter == 0 or cmpIsCompetitive == isCompetitive or cmpHasMicrophone == hasMicrophone or cmpGroupSize == groupSize or cmpLanguage == language\
                or cmpPlatform == platform or cmpRole == role or cmpSeasonRank == seasonRank or cmpServer == server):
            expectedResults.write(uid+"\n"+name+"\n"+info+"\n"+server+"\n"+platform+"\n"+groupSize+"\n"+language+"\n"+seasonRank+"\n"+hasMicrophone+"\n"+role+"\n"+isMature+"\n"+level+"\n"+isCompetitive+"\n"+creationTime+"\n")
            expectedResults.write("========================================================================\n")