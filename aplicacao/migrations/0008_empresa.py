# Generated by Django 5.2.1 on 2025-05-24 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacao', '0007_alter_produto_categoria'),
    ]

    operations = [
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagem', models.ImageField(blank=True, null=True, upload_to='empresas/')),
                ('nome', models.CharField(max_length=100)),
                ('username', models.CharField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=100)),
                ('cnpj', models.CharField(max_length=18)),
                ('inscricao_estadual', models.CharField(blank=True, max_length=50)),
                ('tipo_empresa', models.CharField(blank=True, max_length=100)),
                ('data_abertura', models.DateField(blank=True, null=True)),
                ('natureza_juridica', models.CharField(blank=True, max_length=100)),
                ('atividade_principal', models.CharField(blank=True, max_length=100)),
                ('endereco', models.CharField(blank=True, max_length=200)),
                ('telefone', models.CharField(blank=True, max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('socio_nome', models.CharField(max_length=100)),
                ('socio_cpf', models.CharField(max_length=14)),
                ('socio_data_nascimento', models.DateField()),
                ('socio_cargo', models.CharField(max_length=100)),
                ('socio_telefone', models.CharField(max_length=20)),
                ('socio_email', models.EmailField(max_length=254)),
            ],
        ),
    ]
