import socketio

sio = socketio.Client()

@sio.event
def connect():
    print('connection established')
    #asap conncet success
    sio.emit('raspMessage', {'cameraid': '쪽문', 'people': '3'})
    print('서버에 메시지 전송')

#@sio.event
#def serverConnect(data):
    #서버한테 메시지 받았을때 실행
    #sio.emit('my response', {'cameraid': '쪽문 캠', 'people': '3'})

@sio.event
def disconnect():
    print('disconnected from server')

sio.connect('http://localhost:3000')
sio.wait()