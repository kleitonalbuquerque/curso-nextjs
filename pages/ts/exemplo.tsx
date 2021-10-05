import Pessoa from "../../components/Pessoa";

export default function exemploTs() {
  return (
    <div>
      <Pessoa nome='Kleiton' idade={37} />
      <Pessoa nome='Mariana' />
    </div>
  )
}