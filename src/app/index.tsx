import { useState } from "react";import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";


const perguntas = [
  {
    pergunta: "O que significa a sigla RN em React Native?",
    opcoes: [
      "React Node",
      "React Native",
      "Random Number",
      "Responsive Network"
    ],
    resposta: "React Native"
  },

  {
    pergunta: "Qual linguagem é normalmente usada para desenvolver aplicativos React Native?",
    opcoes: [
      "Python",
      "Java",
      "JavaScript",
      "C#"
    ],
    resposta: "JavaScript"
  },

  {
    pergunta: "Qual comando cria um novo projeto Expo?",
    opcoes: [
      "npm create react",
      "npx create-expo-app",
      "react start",
      "expo install app"
    ],
    resposta: "npx create-expo-app"
  },

  {
    pergunta: "Qual componente é usado para exibir textos no React Native?",
    opcoes: [
      "View",
      "Text",
      "Button",
      "Screen"
    ],
    resposta: "Text"
  },

  {
    pergunta: "Qual componente cria uma área de tela no React Native?",
    opcoes: [
      "View",
      "Image",
      "TextInput",
      "FlatList"
    ],
    resposta: "View"
  },

  {
    pergunta: "Qual hook é usado para criar estados em componentes funcionais?",
    opcoes: [
      "useEffect",
      "useState",
      "useScreen",
      "useApp"
    ],
    resposta: "useState"
  },

  {
    pergunta: "Qual componente é recomendado para listas grandes?",
    opcoes: [
      "ScrollView",
      "FlatList",
      "View",
      "TouchableOpacity"
    ],
    resposta: "FlatList"
  },

  {
    pergunta: "Qual componente permite criar botões clicáveis?",
    opcoes: [
      "TouchableOpacity",
      "Text",
      "StyleSheet",
      "StatusBar"
    ],
    resposta: "TouchableOpacity"
  }
];


export default function App() {

  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);


  function responder(opcao) {

    if(opcao === perguntas[indice].resposta){
      setPontos(pontos + 1);
    }


    if(indice + 1 < perguntas.length){

      setIndice(indice + 1);

    } else {

      setFinalizado(true);

    }

  }


  function reiniciar(){

    setIndice(0);
    setPontos(0);
    setFinalizado(false);

  }



  if(finalizado){

    return (

      <View style={styles.container}>

        <Text style={styles.titulo}>
          Quiz Finalizado 🎉
        </Text>


        <Text style={styles.pontos}>
          Você acertou {pontos} de {perguntas.length}
        </Text>


        <TouchableOpacity
          style={styles.botao}
          onPress={reiniciar}
        >

          <Text style={styles.textoBotao}>
            Jogar novamente
          </Text>

        </TouchableOpacity>


      </View>

    );

  }



  return (

    <View style={styles.container}>


      <Text style={styles.titulo}>
        Quiz React Native 📱
      </Text>


      <Text style={styles.contador}>
        Pergunta {indice + 1} / {perguntas.length}
      </Text>



      <Text style={styles.pergunta}>
        {perguntas[indice].pergunta}
      </Text>



      {
        perguntas[indice].opcoes.map((opcao)=> (

          <TouchableOpacity
            key={opcao}
            style={styles.botao}
            onPress={() => responder(opcao)}
          >

            <Text style={styles.textoBotao}>
              {opcao}
            </Text>

          </TouchableOpacity>

        ))
      }


    </View>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    alignItems:"center",
    justifyContent:"center",
    padding:20
  },


  titulo:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20
  },


  contador:{
    fontSize:18,
    marginBottom:20
  },


  pergunta:{
    fontSize:22,
    textAlign:"center",
    marginBottom:30
  },


  botao:{
    width:"90%",
    backgroundColor:"#2196F3",
    padding:15,
    borderRadius:10,
    marginBottom:15
  },


  textoBotao:{
    color:"white",
    fontSize:18,
    textAlign:"center"
  },


  pontos:{
    fontSize:22,
    marginBottom:30
  }

});