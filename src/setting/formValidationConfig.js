export const formValidConfig = (name) => {
  switch (name) {
    case "email":
      return [
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ];
    case 'password':
        return [
            {
                required: true,
                message: 'Please input your password!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || value.length >= 6) {
                    return Promise.resolve();
                  }
    
                  return Promise.reject(new Error('Password length is enough!'));
                },
              }),
        ]
  }
};
