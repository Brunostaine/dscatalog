package com.devsuperior.dscatalog.entities;

import java.io.Serializable;
import java.util.Objects;

public class Category implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	/**
	 * Adicionar um construtor vazio é um padrão
	 */
	
	public Category() {}

	
	/**
	 * Construtor com algumentos, não é obrigatório
	 * Vamos tirar o super
	 */
	
	public Category(Long id, String name) {
//		super();
		this.id = id;
		this.name = name;
	}
	
	/**
	 * Geters e seters serve para buscar e alterar as entidades
	 * @return
	 */


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}

	/**
	 * É um metodo padrao para comparar se um objeto é igual ao outro
	 * @hashcode: é uma comparação mais rapida mais nao é 100%
	 * @equals: Método mais lento mais que é 100%
	 * é bom usar os dois
	 */
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Category other = (Category) obj;
		return Objects.equals(id, other.id);
	}
	
	
	
}
