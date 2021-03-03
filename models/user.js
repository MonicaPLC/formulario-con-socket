module.exports = (sql, type) => {
  //crear tabla
  return sql.define(
    "user",
    {
      //id queda fijo

      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Debe ingresar nombre",
          },
          len: {
            arg: [3],
            msg: "el nombre debe contener al menos tres letras",
          },
        },
      },

      // validar el mail con alguna expresión regular.
      email: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Debe ingresar un email",
          },
          len: {
            arg: [3],
            msg: "El largo debe ser al menos de tres caracteres",
          },
          isEmail: {
            msg: "Debe ser un email válido",
          },
        },
      },

      password: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Debe indicar una contraseña",
          },
          len: {
            arg: [3],
            msg: "La contraseña debe contener al menos tres caracteres",
          },
        },
      },

      dojo_location: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Debe indicar una contraseña",
          },
          len: {
            arg: [3],
            msg: "La contraseña debe contener al menos tres caracteres",
          },
        },
      },

      favorite_language: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Debe indicar una contraseña",
          },
          len: {
            arg: [3],
            msg: "La contraseña debe contener al menos tres caracteres",
          },
        },
      },
    },
    { timestamps: true }
  );
};
