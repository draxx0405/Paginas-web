import {Input,FormControl} from '@chakra-ui/react'

export default function Inputedit({texto,onChange}){
    return (
        <FormControl>
            <Input 
            color="white" 
            value={texto}
            borderColor="#A30B37"
            variant="unstyled"
            focusBorderColor="transparent"
            onChange={onChange}
            >
            </Input>
        </FormControl>
    )
}