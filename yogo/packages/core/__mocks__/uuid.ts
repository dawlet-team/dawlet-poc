import { random } from 'faker'
console.log('uuid is mocked by faker')

export const v4 = () => random.uuid()

