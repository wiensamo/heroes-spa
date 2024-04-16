import { types } from "../../../src/auth/types/types"

describe('Test in Types.js', () => { 
    
    test('should be return this types', () => { 
        expect( types ).toEqual({
            login:  '[Auth] Login',
            logout: '[Auth] Logout',
        })
     });
     
 })