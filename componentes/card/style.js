import{StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
   
  container: {
    marginTop: 20,
    backgroundColor: '#FFB6C1',
    width: '40%',
    marginLeft: 100,
    borderRadius: 30,
    height: 400,
    flexDirection: 'column',
    padding: 10,
  },
  
  card: {
    marginTop: 80,
    justifyContent:'space-between',
    flexDirection: 'row',
    transition: 'background-color 0.3s ease',
  },


      texto: {
        fontSize: 20,
        marginTop: 5,
        width: 500,
        marginLeft: 1,
      },

      imagem: {
        width: 180,
        height: 180,
        borderRadius: 15,
        marginRight: 10,
      },
      titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5,
      },
})

export default estilo;
