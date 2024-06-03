import Image from "next/image"

const CoinNameRow = ({ name, icon ,clicked }) => {

    console.log("clicked",name,icon)
    return <div onClick={clicked} className="flex">
        <Image src={icon} alt={name} width={20} height={20} />
        <p>{name}</p>
    </div>
}

export default CoinNameRow