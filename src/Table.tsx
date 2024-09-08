import './index.css';

type Item = {
  id: number;
  name: string;
  age: number;
  sex: string;
  family: string;
  money: number;
  city: string;
  children: string[];
};

type ItemKeysArray = (keyof Item)[];

const items: Item[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
  age: Math.floor(Math.random() * 50) + 20,
  sex: Math.random() < 0.5 ? 'Male' : 'Female',
  family: Math.random() < 0.5 ? 'Married' : 'Single',
  money: Math.floor(Math.random() * 100000),
  city: Math.random() < 0.5 ? 'New York' : 'Los Angeles',
  children: Array.from(
    { length: Math.floor(Math.random() * 5) },
    (_, index) => `Child ${index + 1}`
  ),
}));

const columns: ItemKeysArray = ['id', 'name', 'age', 'sex', 'family', 'money', 'city', 'children'];

const TableRow = ({ row }: { row: Item }) => {
  const values = Object.values(row);

  return (
    <div className='row'>
      {values.map((value, index) => (
        <div className='td' key={index}>
          {value}
        </div>
      ))}
    </div>
  );
};

const TableHeader = () => {
  return (
    <div className='row header'>
      {columns.map((column) => (
        <div className='td' key={column}>
          {column}
        </div>
      ))}
    </div>
  );
};

const TableBody = ({ rows }: { rows: Item[] }) => {
  return (
    <div className='tbody'>
      {rows.map((row) => (
        <TableRow key={row.id} row={row} />
      ))}
    </div>
  );
};

export const Table = () => {
  return (
    <div className='tableWrapper'>
      <div className='table'>
        <TableHeader />
        <TableBody rows={items} />
      </div>
    </div>
  );
};
