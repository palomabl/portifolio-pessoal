from pathlib import Path

print("Iniciando geração do SVG...")

largura_svg = 600
altura_svg = 600

tamanho_icone = 190
angulo = 25

# margem das bordas
margem = 50

# posição automática do centro
x_centro = (largura_svg - tamanho_icone) / 2
y_centro = (altura_svg - tamanho_icone) / 2

# posições: 4 cantos + 1 centro
posicoes = [
    (margem, margem),  # superior esquerdo
    (largura_svg - tamanho_icone - margem, margem),  # superior direito
    (margem, altura_svg - tamanho_icone - margem),  # inferior esquerdo
    (largura_svg - tamanho_icone - margem, altura_svg - tamanho_icone - margem),  # inferior direito
    (x_centro, y_centro),  # centro
]

icones = []

for x, y in posicoes:
    centro_x = x + tamanho_icone / 2
    centro_y = y + tamanho_icone / 2

    icones.append(
        f'''
  <use href="#code-icon"
       x="{x}"
       y="{y}"
       width="{tamanho_icone}"
       height="{tamanho_icone}"
       transform="rotate({angulo} {centro_x} {centro_y})" />'''
    )

svg_content = f"""<svg
  width="{largura_svg}"
  height="{altura_svg}"
  viewBox="0 0 {largura_svg} {altura_svg}"
  xmlns="http://www.w3.org/2000/svg">

  <defs>
    <symbol id="code-icon" viewBox="0 0 100 100">
      <g
        stroke="#38bdf8"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none">
        <path d="M 32 35 L 12 50 L 32 65" />
        <path d="M 45 75 L 55 25" />
        <path d="M 68 35 L 88 50 L 68 65" />
      </g>
    </symbol>
  </defs>

  {"".join(icones)}

</svg>
"""

try:
    pasta_do_script = Path(__file__).resolve().parent
    output_path = pasta_do_script / "code-pattern-600x600.svg"

    output_path.write_text(svg_content, encoding="utf-8")

    print("SVG gerado com sucesso!")
    print(f"Local: {output_path}")

except Exception as erro:
    print("Ocorreu um erro ao gerar o SVG:")
    print(erro)