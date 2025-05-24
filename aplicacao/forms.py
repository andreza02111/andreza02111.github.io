from django import forms
from .models import Produto
from .models import Form_Contato

class ProdutoForm(forms.ModelForm):
    imagem = forms.ImageField(label='Imagem', required=False, widget=forms.FileInput(attrs={'class': 'form-control'}))
    nova_categoria = forms.CharField(required=False, label="Nova Categoria")
    class Meta:
        model = Produto
        fields = ('nome', 'descricao', 'valor', 'observacao', 'categoria', 'imagem')
        widgets = {
            'data': forms.DateInput(attrs={'type': 'date'}),
            'nome': forms.TextInput(attrs={'class': 'form-control'}),
            'descricao': forms.TextInput(attrs={'class': 'form-control'}),
            'valor': forms.NumberInput(attrs={'class': 'form-control'}),
            'observacao': forms.Textarea(attrs={'class': 'form-control'}),
            'categoria': forms.Select(attrs={'class': 'form-control'}),
        }

class ContatoForm(forms.ModelForm):
    class Meta:
        model = Form_Contato
        fields = ['nome_contato', 'email', 'assunto', 'mensagem', 'data']
        widgets = {
                'data': forms.DateInput(attrs={'type': 'date'})
}

from .models import Categoria

class CategoriaForm(forms.ModelForm):
     class Meta:
        model = Categoria
        fields = ['nome']

from .models import Empresa

class EmpresaForm(forms.ModelForm):
     password = forms.CharField(widget=forms.PasswordInput)

     class Meta:
        model = Empresa
        fields = '__all__'
