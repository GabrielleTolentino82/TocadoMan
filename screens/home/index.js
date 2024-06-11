import React from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from "react-native";
import Header from "../../componentes/header";
import Card from "../../componentes/card";
import DATA from '../../data';
import Footer from "../../componentes/footer";
import { useNavigation } from '@react-navigation/native'

export default function home() {

  const navigation = useNavigation();

  return (
    <View style={estilo.container}>

     <Header />
     <Image style={{width: '90%', aspectRatio: 6, borderRadius: 15}} source={{uri: 'https://img.freepik.com/premium-vector/vector-red-fire-sparks-flying-up-burning-glowing-particles-flame-fire-with-sparks-isolated-black-transparent-background_221648-554.jpg'}}/>
     <View style = {{flex: 1, width: '100%'}}>

     <View style={estilo.topLine}></View>
  
       <FlatList
         data={DATA}
         keyExtractor={(item) => item.id}
         numColumns={2}
         renderItem={({ item }) => (
           <TouchableOpacity style={{margin: 20, marginLeft: '6%'}} onPress = {()=>navigation.navigate('details', {titulo:item.titulo, descricao:item.descricao, preco:item.preco, imagem:item.imagem})}>
             <Card 
               id={item.id}
               imagem={item.imagem}
               titulo={item.titulo}
               descricao={item.descricao}
               preco={item.preco}
             /> 
           </TouchableOpacity>
         )}
       />
       <View style={estilo.topLine}></View>

     </View>
     
     <Footer />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'pink',
  },

  categoriaContainer: {
    marginHorizontal: 30, 
    marginTop: 10, 
    backgroundColor: '#333',
    width: '8%',
    borderRadius: 10,
    border: '4px solid white',
  },

 

  topLine: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});
