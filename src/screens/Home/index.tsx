import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export default function App() {

    const participants = ["Luis", "Denise", "Geisa", "Seu Afonso", "Tchuco", "Aurentina", "Ana", "Pedro", "Gilmar", "Luzia", "Alguém"];

    function handleParticipantAdd() {
        if (participants.includes("Luis")) {
            return Alert.alert("Participante já existe", "Já existe um partcipante na lista com esse nome.")
        }
    }

    function handleParticipantRemove(nome: string) {
        Alert.alert("Remover partcipante", `Deseja remover ${nome} da lista de participantes?`, [
            {
                text: "Sim",
                onPress: () => Alert.alert("Participante deletado.")
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
    }

    return (

        <View style={styles.container}>

            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 24 de Dezembro de 2023.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Insira o nome do participante"
                    placeholderTextColor={"#6b6b6b"}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}

                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Que tal adicionar alguns participantes?
                    </Text>
                }

            />
        </View>

    )
}