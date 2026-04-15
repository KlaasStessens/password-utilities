# @nikleos/password-utilities

A javascript library for password utilities. 

## Installation

### npm
```bash
npm install @nikleos/password-utilities
```
### yarn
```bash
yarn add @nikleos/password-utilities
```
## Testing
npm test
## Function(s)
### generateStrongPassword
Generates a strong password, of x-number characters. This number is given by the user.

```javascript
generateStrongPassword(5);
// result -> qAv8+
```
### isStrongPassword
Checks if a given password is strong. 
```javascript
isStrongPassword("Hello World");
// result -> false
```
## Contributing.md
see CONTRIBUTING.md for guidelines.
## Security
see SECURITY.md for reporting security vulnerabilities.


