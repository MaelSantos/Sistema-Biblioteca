from cryptography.fernet import Fernet

key = Fernet.generate_key()
cipher_suite = Fernet(key)

e = cipher_suite.encrypt(b"Mael")
a = cipher_suite.encrypt(b"Mael")
d = cipher_suite.decrypt(a)

print(e)
print(a)
print(d)