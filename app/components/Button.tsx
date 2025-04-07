import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Linking } from 'react-native';


type Props = {
    label: string;
    theme?: 'primary';
    url: string;
};


export default function Button({ label, theme, url }: Props) {
    if (theme === 'primary') {
        return (
            <View
                style={[
                    styles.buttonContainer,
                    { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
                ]}
            >
                <Pressable
                    style={[styles.button, { backgroundColor: '#fff' }]}
                    onPress={() => Linking.openURL(url)}
                    >
                    <FontAwesome
                        name="heart"
                        size={18}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: '#25292e' }]}>
                        {label}
                    </Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={() => Linking.openURL(url)}
            >
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 328,
        height: 68,
        marginHorizontal: 28,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        backgroundColor: '#28a745',
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    buttonPressed: {
        backgroundColor: '#218838',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonIcon: {
        paddingRight: 8,
    },
});
