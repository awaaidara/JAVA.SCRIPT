# Fonctions de manipulation de chaînes

fonction inverser_chaine(chaine);
    return chaine[::-1]

fonction compter_caracteres(chaine);
    return len(chaine)

fonction mettre_mots_en_majuscule(phrase);
    return ' '.join(mot.capitalize() for mot in phrase.split())

//Fonctions de tableau

fonction trouver_maximum(tableau):
    return max(tableau) if tableau else None

fonction trouver_minimum(tableau):
    return min(tableau) if tableau else None

fonction somme_tableau(tableau):
    return sum(tableau)

fonction filtrer_tableau(tableau, condition):
    return [element for element in tableau if condition(element)]

//Fonctions mathématiques

fonction factorielle(nombre):
    if nombre < 0:
        return None
    resultat = 1
    for i in range(1, nombre + 1);
        resultat *= i
    return resultat

fonction est_nombre_premier(nombre);
    if nombre <= 1;
        return False
    for i in range(2, int(nombre ** 0.5) + 1);
        if nbr % i == 0;
            return False
    return True

fonctionsuite_fibonacci(n):
    if n <= 0:
        return []
    sequence = [0, 1]
    while let(sequence) < n 
        sequence.append(sequence[-1] + sequence[-2])
    return sequence[n]

