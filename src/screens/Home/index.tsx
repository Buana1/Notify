import { Text, TextInput, View, TouchableOpacity } from "react-native";

import {styles} from './styles';

export function Home(){

    function handleParticipanteAdd(){
        console.log("Clicaste no Botão participante");
    }
    
  return (
    <View style={styles.container}>
      <Text style={styles.eventDate}> 
        Nome do Evento
      </Text>

      <Text style={styles.eventName}> 
        Kevin no top, 2024
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={"#6B6B6B"}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipanteAdd}> 
          <Text style={styles.buttonText}> 
              +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}