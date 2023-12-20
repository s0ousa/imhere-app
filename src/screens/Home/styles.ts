import { StyleSheet } from "react-native";

const branco = "#FDFCFE";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131016",
        padding: 24
    },
    eventName: {
        color: branco,
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },
    eventDate: {
        color: "#6b6b6b",
        fontSize: 16
    },
    input: {
        flex: 1,
        color: branco,
        backgroundColor: "#1f1e25",
        height: 56,
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    button: {
        backgroundColor: "#31cf67",
        height: 56,
        width: 56,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"

    },
    buttonText: {
        color: branco,
        fontSize: 24
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42,
    },
    listEmptyText: {
        color: "#FFF",
        fontSize: 16,
        textAlign: "center"
    }
})