import { Individual } from "../types/user";

export const clientMock: Individual[] = [
    {
        "name": "John",
        "role": "CEO",
        "temporaryRole": "CEO",
        "value": 7,
        "symbolism": "Visionary",
        "tarot": "The Sun",
        "idealRoles": ["CEO", "Leader"],
        "compatibility": [
            { "individualA": "John", "individualB": "Alice", "match": true, "score": 6, "factors": {} },
            { "individualA": "John", "individualB": "Bob", "match": false, "score": 3, "factors": {} }
        ]
    },
    {
        "name": "Manuel",
        "role": "CEO",
        "temporaryRole": "CEO",
        "value": 7,
        "symbolism": "Visionary",
        "tarot": "The Sun",
        "idealRoles": ["CEO", "Leader"],
        "compatibility": [
            { "individualA": "John", "individualB": "Alice", "match": true, "score": 6, "factors": {} },
            { "individualA": "John", "individualB": "Bob", "match": false, "score": 3, "factors": {} }
        ]
    },
    {
        "name": "Alice",
        "role": "CFO",
        "temporaryRole": "CFO",
        "value": 5,
        "symbolism": "Strategist",
        "tarot": "The Moon",
        "idealRoles": ["CFO", "Planner"],
        "compatibility": [
            { "individualA": "Alice", "individualB": "John", "match": true, "score": 6, "factors": {} },
            { "individualA": "Alice", "individualB": "Bob", "match": false, "score": 2, "factors": {} }
        ]
    },
    {
        "name": "Bob",
        "role": "Product Manager",
        "temporaryRole": "CTO",
        "value": 8,
        "symbolism": "Innovator",
        "tarot": "The Star",
        "idealRoles": ["CTO", "Technologist"],
        "compatibility": [
            { "individualA": "Bob", "individualB": "John", "match": false, "score": 3, "factors": {} },
            { "individualA": "Bob", "individualB": "Alice", "match": false, "score": 2, "factors": {} }
        ]
    },
    {
        "name": "Individual4",
        "role": "Developer",
        "temporaryRole": "Developer",
        "value": 3,
        "symbolism": "Analyst",
        "tarot": "The Lovers",
        "idealRoles": ["Developer"],
        "compatibility": [
            { "individualA": "Individual4", "individualB": "John", "match": true, "score": 7, "factors": {} },
            { "individualA": "Individual4", "individualB": "Alice", "match": false, "score": 4, "factors": {} },
            { "individualA": "Individual4", "individualB": "Bob", "match": true, "score": 5, "factors": {} }
        ]
    },
    {
        "name": "Individual5",
        "role": "Sales Manager",
        "temporaryRole": "Sales Manager",
        "value": 6,
        "symbolism": "Leader",
        "tarot": "The Moon",
        "idealRoles": ["Sales Manager"],
        "compatibility": [
            { "individualA": "Individual5", "individualB": "John", "match": false, "score": 3, "factors": {} },
            { "individualA": "Individual5", "individualB": "Alice", "match": true, "score": 8, "factors": {} },
            { "individualA": "Individual5", "individualB": "Bob", "match": false, "score": 2, "factors": {} }
        ]
    }
]
