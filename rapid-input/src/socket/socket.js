import { io } from 'socket.io-client';

const SOCKET_URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:5000'; // Assuming your Flask server runs on port 5000

const socket = io(SOCKET_URL, {
  autoConnect: false, // Prevents automatic connection establishment
  transports: ['websocket'], // Use WebSocket transport
  withCredentials: true, // Allow sending cookies
  cors: {
    origin: 'http://localhost:3000', // Allow requests from the React development server
    methods: ['GET', 'POST'], // Allow only specified methods
    allowedHeaders: ['Authorization'], // Allow only specified headers
    credentials: true // Allow sending credentials (cookies)
  }
});

export default socket;
