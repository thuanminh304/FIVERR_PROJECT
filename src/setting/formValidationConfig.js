export const formValidConfig = (name) => {
  if(name === 'first_name' || name === 'last_name'){
    return [
      {
        required: true,
        message: `Please input your Infomation!`,
      },
    ]
  }
  switch (name) {
    case "email":
      return [
        {
          type: "email",
          message: "The input is not valid E-mail!",
        },
        {
          required: true,
          message: "Please input your E-mail!",
          status: 'warning',
        },
      ];
    case "password":
      return [
        {
          required: true,
          message: "Please input your password!",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || value.length >= 6) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Password is not enough strong!"));
          },
        }),
      ];
    case "re-password":
      return [
        {
          required: true,
          message: "Please repeat your password!",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || value === getFieldValue('password')) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("The two passwords that you entered do not match!"));
          },
        }),
      ];
    case "phone":
      return [
        {
          required: true,
          message: "Please input your phone number!",
        },
        () => ({
          validator(_, value) {
            const regex = /^-?\d+$/;
            if(!value || regex.test(value)){
              return Promise.resolve();
            }
            else{
              return Promise.reject(new Error("The input is not valid Phone Number!"));
            }
          }
        }),

      ];
    case "gender":
      return [
        {
          required: true,
          message: "Please select gender!",
        },
      ];
    case "birthday":
      return [
        {
          required: true,
          message: "Please input your birthday!",
        },
      ]
  }
};
