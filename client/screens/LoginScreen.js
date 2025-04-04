// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    dispatch(login(email, password));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title={loading ? 'Logging in...' : 'Login'} onPress={handleLogin} disabled={loading} />
      <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
        Don't have an account? Register
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 },
  link: { textAlign: 'center', marginTop: 20, color: 'blue' },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
});