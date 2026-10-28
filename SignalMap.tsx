// Elemento de assinatura visual da Viva Connecta: um mapa de sinal —
// um nó central (a empresa) irradiando conexões para nós satélite
// (os clientes/empresas atendidas), com pulsos percorrendo as linhas
// para sugerir transmissão de dados em tempo real. Construído em SVG
// puro + animações CSS (sem bibliotecas), leve e performático.

const NODES = [
  { id: "n1", x: 120, y: 90 },
  { id: "n2", x: 640, y: 70 },
  { id: "n3", x: 760, y: 260 },
  { id: "n4", x: 90, y: 320 },
  { id: "n5", x: 420, y: 40 },
  { id: "n6", x: 700, y: 420 },
  { id: "n7", x: 200, y: 430 },
];

const CENTER = { x: 400, y: 240 };

const delays = [0, 0.6, 1.2, 1.8, 2.4, 0.3, 0.9];

export default function SignalMap() {
  return (
    <svg
      viewBox="0 0 800 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3D8BFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3D8BFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* linhas estáticas de fundo (estrutura da rede) */}
      {NODES.map((n) => (
        <line
          key={`base-${n.id}`}
          x1={CENTER.x}
          y1={CENTER.y}
          x2={n.x}
          y2={n.y}
          stroke="#243056"
          strokeWidth="1"
        />
      ))}

      {/* pulsos animados percorrendo cada conexão */}
      {NODES.map((n, i) => (
        <line
          key={`pulse-${n.id}`}
          x1={CENTER.x}
          y1={CENTER.y}
          x2={n.x}
          y2={n.y}
          stroke="#3D8BFF"
          strokeWidth="1.6"
          strokeDasharray="6 234"
          strokeLinecap="round"
          className="animate-pulse-line"
          style={{ animationDelay: `${delays[i]}s` }}
        />
      ))}

      {/* halo do nó central */}
      <circle cx={CENTER.x} cy={CENTER.y} r="70" fill="url(#hubGlow)" />

      {/* nó central */}
      <circle cx={CENTER.x} cy={CENTER.y} r="7" fill="#F4F7FC" />
      <circle cx={CENTER.x} cy={CENTER.y} r="14" stroke="#3D8BFF" strokeWidth="1.5" opacity="0.6" />

      {/* nós satélite */}
      {NODES.map((n, i) => (
        <g key={`node-${n.id}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r="4.5"
            fill="#17D7B0"
            className="animate-node-glow"
            style={{ animationDelay: `${delays[i]}s`, transformOrigin: `${n.x}px ${n.y}px` }}
          />
        </g>
      ))}
    </svg>
  );
}
