import socketio
import sys
from os.path import exists

sio = socketio.Client()

filename = 'hellow.txt'
filepath =  'C:/Users/GL62/Desktop/'+filename 

@sio.event
def connect():
    print('connection established')
    #asap connect success
    sio.emit('raspMessage', {'cameraid': '쪽문', 'people': '3'})
    print('서버에 메시지 전송\n')
    
    print('파일 %s 전송 시작 ...'%filename)

    with open(filepath,'r') as f:
        try:
            data = f.read(1024)
            while(data):
                sio.emit('textfile',data)
                data = f.read(1024)
        except Exception as e:
            print(e)
        print('<<전송완료 - %s >>'%(filename))
        

#@sio.event
#def serverConnect(data):
    #서버한테 메시지 받았을때 실행
    #sio.emit('my response', {'cameraid': '쪽문 캠', 'people': '3'})

@sio.event
def disconnect():
    print('disconnected from server')

sio.connect('http://localhost:3000')
sio.wait()