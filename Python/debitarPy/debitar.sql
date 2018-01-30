CREATE TABLE Conta (
  id SERIAL  NOT NULL ,
  Descricao VARCHAR(15)   NOT NULL   ,
PRIMARY KEY(id));




CREATE TABLE Categoria (
  id SERIAL  NOT NULL ,
  Descricao VARCHAR(20)      ,
PRIMARY KEY(id));




CREATE TABLE Lancamento (
  id SERIAL  NOT NULL ,
  Categoria_id INTEGER   NOT NULL ,
  Conta_id INTEGER   NOT NULL ,
  Tipo CHAR(1)   NOT NULL ,
  DataLcto DATE   NOT NULL ,
  Descricao VARCHAR(100)   NOT NULL ,
  Valor NUMERIC(14,2)   NOT NULL   ,
PRIMARY KEY(id)    ,
  FOREIGN KEY(Conta_id)
    REFERENCES Conta(id),
  FOREIGN KEY(Categoria_id)
    REFERENCES Categoria(id));


CREATE INDEX Lancamento_FKIndex1 ON Lancamento (Conta_id);
CREATE INDEX Lancamento_FKIndex2 ON Lancamento (Categoria_id);


CREATE INDEX IFK_Rel_02 ON Lancamento (Conta_id);
CREATE INDEX IFK_Rel_03 ON Lancamento (Categoria_id);



