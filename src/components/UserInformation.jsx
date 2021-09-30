import { name, internet, date } from 'faker';

const UserInformation = (totalRows = 5) => {
  let rows = [];
  for (let i = 0; i < totalRows; i++) {
    rows.push({
      'Name': name.lastName(),
      'Father name': `${name.firstName()} ${name.lastName()}`,
      email: internet.email(),
      'last visit': date.past().toLocaleDateString('en-US')
    });
  }

  return {
    data: rows,
    columns: Object.keys(rows[0])
  };
};

export default UserInformation