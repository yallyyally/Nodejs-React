
var name = 'efefefefef';
var letter = 
'Aliqua quis proiden'+name+'t excepteur in anim nulla qui\\n'
+name+' ea est. Magna culpa mollit Lorem magna pariatur\
 ad qui in irure id proident. Nisi amet ullamco a\nute aliqua amet \
 culpa labore deserunt id.'+name+' Magna enim ullam\nco mollit qui\
  ipsum enim irure reprehenderit sint. Duis reprehenderit laboris aliquip\
  '+name+' sunt. Commodo tempor minim sint commodo magna amet.'

  console.log(letter);
//줄바꿈 \n

var a = 1; //숫자 데이터 표현
var a2 = '1'; // 문자 데이터 표현

var letter= 
`Aliqua quis proiden ${name} t excepteur in anim nulla qui

 ea est. Magna culpa mollit Lorem magna pariatur${name}
 ad qui in irure id proident. Nisi amet ullamco ute aliqua amet

 culpa labore deserunt id.${name} Magna enim ullam
 co mollit qui ${1+1}
  ipsum enim irure reprehenderit sint. Duis reprehenderit laboris aliquip
   sunt. Commodo tempor ${name}minim sint commodo magna amet.`;
// ' 말고 ` 써서 '+name+' 할 필요 없고 \n 안해저도 됨 \ 안해줘도 되고 그으대로 나옴

console.log(letter);