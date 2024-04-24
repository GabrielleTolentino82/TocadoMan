import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import estilo from "./style";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Footer() {
    return(
        <>
        <View style={estilo.footerContainer}>
        <View style={estilo.topLine}></View> 
            <View style={estilo.logoContainer}>
                <Image style={estilo.imagem} source={{uri: 'https://files.menudino.com/cardapios/59084/logo.png'}}/>
            </View>
            <View style={estilo.footerSectionsContainer}>
                <View style={estilo.footerSection}>
                    <Text style={estilo.footerSectionTitle}>Ajuda</Text>
                    <Text style={estilo.footerLink}>Perguntas frequentes</Text>
                    <Text style={estilo.footerLink}>Política de privacidade</Text>
                    <Text style={estilo.footerLink}>Termos de serviço</Text>
                </View>
                <View style={estilo.footerSection}>
                    <Text style={estilo.footerSectionTitle}>Pedidos</Text>
                    <Text style={estilo.footerLink}>Cardápio</Text>
                    <Text style={estilo.footerLink}>Fazer pedido online</Text>
                </View>
                <View style={estilo.footerSection}>
                    <Text style={estilo.footerSectionTitle}>Contato</Text>
                    <Text style={estilo.footerLink}>Telefone: (11) 1234-5678</Text>
                    <Text style={estilo.footerLink}>Email: contato@tocadomam.com</Text>
                </View>
                <View style={estilo.footerSection}>
                    <Text style={estilo.footerSectionTitle}>Siga-nos</Text>
                    <AntDesign name="instagram" size={40} color="white" />
                    <Entypo name="facebook" size={40} color="white" />
                    <AntDesign name="twitter" size={40} color="white" />
                </View>
            </View>
        </View>
    </>
    );
}