class TeboSet extends Set {
    _isValidSet = (set) => {
        return set && set instanceof Set && set.size > 0;
    }

    isSupersetOf(set) {
        if (!this._isValidSet(set)) return false;

        return this.size >= set.size && [...set].every(item => this.has(item));
    }

    isSubsetOf(set) {
        if (!this._isValidSet(set)) return false;

        return set.size >= this.size && [...this].every(item => set.has(item));
    }

    union(set) {
        if (!this._isValidSet(set)) return false;

        return new TeboSet([...this, ...set]);
    }

    difference(set) {
        if (!this._isValidSet(set)) return false;

        const differenceSet = new TeboSet();

        this.forEach(item => {
            if (!set.has(item)) differenceSet.add(item);
        })

        return differenceSet;
    }

    intersection(set) {
        const intersectionSet = new TeboSet();

        if (!this._isValidSet(set)) return intersectionSet;

        this.forEach(item => {
            if (set.has(item)) intersectionSet.add(item);
        });

        return intersectionSet;
    }

    intersectionDifference(set) {
        if (!this._isValidSet(set)) return this;

        return new TeboSet([
            ...this.difference(set),
            ...set.difference(this)
        ]);
    }
};

const set1 = new TeboSet(['a', 'b', 'c']);
const set2 = new TeboSet(['b', 'c', 'd']);

console.log(set1.union(set2));
console.log(set1.difference(set2));
console.log(set2.difference(set1));
console.log(set1.intersection(set2));
console.log(set2.intersection(set1));
console.log(set1.intersectionDifference(set2));
console.log(set2.intersectionDifference(set1));