const sub = "sub"

type readOrWrite = 'read' | 'write'
// iterate throw types and change it names.
type userAcces = `user-can-${readOrWrite}`; // 'user-can-read' | 'user-can-write'

type userAccesCamelCase = `user${Capitalize<readOrWrite>}`; // 'userRead' | 'userWrite'
type userAccesUppercase = `user${Uppercase<readOrWrite>}`; // 'userREAD' | 'userWRITE'
type userAccesLowercase = `${Lowercase<userAccesUppercase>}`; // 'userread' | 'userwrite'

type readOrWriteCapitalize = `${Capitalize<readOrWrite>}User` // 'ReadUser' | 'WriteUser'
// only first letter
type userAccesUncapitalize = `${Uncapitalize<readOrWriteCapitalize>}`; // 'readUser' | 'writeUser'

type hiddenOrNot = 'hidden' | ''

// 2 types * 2 types = 4 types
// "canReadHidden" | "canRead" | "canWriteHidden" | "canWrite"
type userAccesWithHiddenOrEmpty = `can${Capitalize<readOrWrite>}${Capitalize<hiddenOrNot>}`;

//unzip
type unzip<T> = T extends `user${infer R}`? R : never
type unzipUserAccesLowercase = unzip<userAccesLowercase> // 'userread' | 'userwrite' -> 'read' | 'write'
