import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    cardNumber: yup
        .number()
        .typeError('Esse campo deve ser preenchido por números')
        .required('Insira o numero do cartão'),
    username: yup.string().required('Informe o nome do titular'),
    cpf: yup
        .number()
        .typeError('Esse campo deve ser preenchido por números')
        .required('Insira o número do CPF'),
    validity: yup
        .number()
        .typeError('Esse campo deve ser preenchido por números')
        .required('Insira a data de validade do cartão'),
    securityCode: yup
        .number()
        .typeError('Esse campo deve ser preenchido por números')
        .required('Insira o código de segurança'),
});

export default function Payment() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function handlePay() {
        alert('Pagamento bem sucedido');
    }
    return (
        <body style={styles.body}>
            <ScrollView>
                <View>
                    <Text style={styles.text}>
                        Insira os dados para concluir a contratação via cartão
                        de crédito.
                    </Text>
                    <View style={styles.inputContainer}>
                        <Controller
                            control={control}
                            name='cardNumber'
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    style={[
                                        styles.inputFirst,
                                        {
                                            borderWidth: errors.cardNumber && 1,
                                            borderColor:
                                                errors.cardNumber && '#ff375b',
                                        },
                                    ]}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder='Número do cartão'
                                />
                            )}
                        />
                        {errors.cardNumber && (
                            <Text style={styles.labelError}>
                                {errors.cardNumber?.message}
                            </Text>
                        )}

                        <Controller
                            control={control}
                            name='username'
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderWidth: errors.username && 1,
                                            borderColor:
                                                errors.username && '#ff375b',
                                        },
                                    ]}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder='Nome do titular'
                                />
                            )}
                        />
                        {errors.username && (
                            <Text style={styles.labelError}>
                                {errors.username?.message}
                            </Text>
                        )}

                        <Controller
                            control={control}
                            name='cpf'
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderWidth: errors.cpf && 1,
                                            borderColor:
                                                errors.cpf && '#ff375b',
                                        },
                                    ]}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder='CPF do titular'
                                />
                            )}
                        />
                        {errors.cpf && (
                            <Text style={styles.labelError}>
                                {errors.cpf?.message}
                            </Text>
                        )}
                        <Controller
                            control={control}
                            name='validity'
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderWidth: errors.validity && 1,
                                            borderColor:
                                                errors.validity && '#ff375b',
                                        },
                                    ]}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder='Validade'
                                />
                            )}
                        />
                        {errors.validity && (
                            <Text style={styles.labelError}>
                                {errors.validity?.message}
                            </Text>
                        )}
                        <Controller
                            control={control}
                            name='securityCode'
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    style={[
                                        styles.inputLasted,
                                        {
                                            borderWidth:
                                                errors.securityCode && 1,
                                            borderColor:
                                                errors.securityCode &&
                                                '#ff375b',
                                        },
                                    ]}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder='Código de segurança'
                                    secureTextEntry={true}
                                />
                            )}
                        />
                        {errors.securityCode && (
                            <Text style={styles.labelError}>
                                {errors.securityCode?.message}
                            </Text>
                        )}
                    </View>
                </View>
                <View
                    style={styles.buttonContainer}
                    onPress={handleSubmit(handlePay)}
                >
                    <TouchableOpacity
                        style={styles.payButton}
                        onPress={handleSubmit(handlePay)}
                    >
                        <Text style={styles.payText}>Pagar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </body>
    );
}

const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    text: {
        paddingTop: '25%',
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'left',
        paddingHorizontal: 34,
        fontSize: 14,
    },
    inputContainer: {
        marginTop: '8%',
        alignItems: 'center',
    },
    input: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        height: 45,
        borderWidth: 1,
        borderColor: '#dedede',
        backgroundColor: '#ffff',
        width: 250,
        borderRadius: 0,
        fontWeight: 400,
        color: 'black',
        paddingHorizontal: 17,
        borderTopColor: '#ffff',
    },
    inputFirst: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        height: 45,
        borderWidth: 1,
        borderColor: '#dedede',
        backgroundColor: '#ffff',
        width: 250,
        fontWeight: 400,
        color: 'black',
        paddingHorizontal: 17,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    inputLasted: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        height: 45,
        borderWidth: 1,
        borderColor: '#dedede',
        backgroundColor: '#ffff',
        width: 250,
        fontWeight: 400,
        color: 'black',
        paddingHorizontal: 17,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderTopColor: '#ffff',
    },
    buttonContainer: {
        marginTop: '13%',
        marginBottom: '15%',
        alignItems: 'center',
    },
    payButton: {
        backgroundColor: '#07689f',
        fontFamily: 'Montserrat_400Regular',
        borderRadius: 3,
        width: 250,
        paddingVertical: 10,
    },
    payText: {
        textAlign: 'center',
        color: '#ffff',
        fontSize: 13,
        fontWeight: 500,
        fontFamily: 'Montserrat_400Regular',
    },
    backButton: {
        fontFamily: 'Montserrat_400Regular',
        borderRadius: 3,
        width: 250,
        marginBottom: 5,
        paddingVertical: 12,
    },
    backText: {
        textAlign: 'center',
        color: '#07689f',
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'Montserrat_400Regular',
    },
    labelError: {
        width: 250,
        color: '#ff375b',
        marginBottom: 8,
    },
});
