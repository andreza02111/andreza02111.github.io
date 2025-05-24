from django.contrib import admin
from .models import Categoria
from .models import Produto
from .models import Cad_Cliente
from .models import Form_Contato
from .models import Login_Admin


# Register your models here.
from django.contrib import admin
from .models import Empresa

admin.site.register(Empresa)

admin.site.register(Categoria)
admin.site.register(Produto)
admin.site.register(Cad_Cliente)
admin.site.register(Form_Contato)
admin.site.register(Login_Admin)