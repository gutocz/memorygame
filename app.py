# app.py
from flask import Flask, render_template, request
import csv

app = Flask(__name__)
app.static_folder = 'static'

@app.route('/')
def index():
    return render_template('formulario.html')

@app.route('/cadastrar', methods=['POST'])
def cadastrar():
    nome = request.form['nome']
    email = request.form['email']
    telefone = request.form['telefone']

    with open('data/usuarios.csv', 'a', newline='') as arquivo_csv:
        csv_writer = csv.writer(arquivo_csv)
        csv_writer.writerow([nome, email, telefone])

    return render_template('memorygame.html')

if __name__ == '__main__':
    app.run(debug=True)
