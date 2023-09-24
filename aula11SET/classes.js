class Pessoa {

    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    } 

        getNome(){ 
            return this.nome;
        }

        getCargo(){
            return this.cargo;
        }

        setNome(nome){
            this.nome = nome;

        } 
        setCargo(cargo) {
            this.cargo = cargo;
        }
    }

    class Professor extends Pessoa {
         constructor(nome, cargo, departamento) {
            super(nome, cargo);
           this.departamento = departamento;
         } 

        getDepartamento() {
           return this.departamento;
        }
              
        setDepartamento(departamento) {
              this.departamento = departamento;
        }
    }        