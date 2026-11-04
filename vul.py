# DANGEROUS: eval() executes arbitrary string inputs as Python code
def evaluate_expression(user_input):
    return eval(user_input) 

# An attacker passing "__import__('os').system('rm -rf /')" can compromise the server.
Use code with caution.
Secure Fix (app_secure.py)
python
import ast

# SAFE: ast.literal_eval only parses safe, literal Python primitives
def evaluate_expression_safe(user_input):
    try:
        return ast.literal_eval(user_input)
    except (ValueError, SyntaxError):
        return "Invalid input"
