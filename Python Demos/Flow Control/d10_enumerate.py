import sys

#for idx, arg in enumerate(sys.argv):
#    print('index:', idx, 'argument:', arg)

for linenum, contentsofline in enumerate(open("python_song.txt"), start=1):
    print(linenum, contentsofline, end="")
