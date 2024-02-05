type RandomNumbernum = {
    value: number
}

type Positivenumber = RandomNumbernum & {
    isPositive: boolean
    isNegative?:never
    isZero?:never
}
type Negativenumber = RandomNumbernum & {
    isNegative: boolean
    isPositive?:never
    isZero?:never
}
type Zeronumber = RandomNumbernum & {
    isZero: boolean
    isPositive?:never
    isNegative?:never
}
type RandomNumberprops = Positivenumber | Negativenumber | Zeronumber

export const RandomNumber = ({
    value, isPositive, isNegative, isZero
}: RandomNumberprops) => {


    return(
        <div>
            {value} {isPositive && 'Positive'} {isNegative && `Negative`} {' '}
            {isZero && 'Zero'}
        </div>
    )

}