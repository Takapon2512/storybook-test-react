import { Button2 } from "@/components/atoms/Button2";

export default function Home() {
  const handleClick = () => {
    console.log('aaa')
  }

  return (
    <div>
      <Button2 innerText="あああ" onClick={handleClick} />
    </div>
  );
}
